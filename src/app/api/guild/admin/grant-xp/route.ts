import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { employeeId, amount, source } = await request.json();

    if (!employeeId || !amount || !source) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find or create guild member for this employee
    let guildMember = await prisma.guildMember.findUnique({
      where: { employeeId }
    });

    if (!guildMember) {
      // Get employee to find userId
      const employee = await prisma.employee.findUnique({
        where: { id: employeeId }
      });

      if (!employee) {
        return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
      }

      // Create guild member if doesn't exist
      guildMember = await prisma.guildMember.create({
        data: {
          employeeId,
          userId: employee.userId,
          currentLevel: 1,
          levelName: 'Novice',
          totalXP: 0,
          currentXP: 0,
          xpToNextLevel: 100
        }
      });
    }

    // Create XP transaction record
    const transaction = await prisma.xPTransaction.create({
      data: {
        guildMemberId: guildMember.id,
        amount,
        type: 'ADJUSTED', // Admin grants are treated as adjustments
        source
      }
    });

    // Update guild member's XP
    const newTotalXP = guildMember.totalXP + amount;
    let newLevel = guildMember.currentLevel;
    let newLevelName = guildMember.levelName;
    let newCurrentXP = guildMember.currentXP + amount;
    let newXPToNextLevel = guildMember.xpToNextLevel;

    // Level progression logic
    const levelThresholds = [
      { level: 1, name: 'Novice', xp: 0 },
      { level: 2, name: 'Apprentice', xp: 1000 },
      { level: 3, name: 'Journeyman', xp: 2500 },
      { level: 4, name: 'Expert', xp: 5000 },
      { level: 5, name: 'Master', xp: 10000 },
      { level: 6, name: 'Grandmaster', xp: 20000 }
    ];

    for (let i = levelThresholds.length - 1; i >= 0; i--) {
      if (newTotalXP >= levelThresholds[i].xp) {
        newLevel = levelThresholds[i].level;
        newLevelName = levelThresholds[i].name;
        const nextLevelThreshold = levelThresholds[i + 1];
        if (nextLevelThreshold) {
          newCurrentXP = newTotalXP - levelThresholds[i].xp;
          newXPToNextLevel = nextLevelThreshold.xp - levelThresholds[i].xp;
        }
        break;
      }
    }

    await prisma.guildMember.update({
      where: { id: guildMember.id },
      data: {
        totalXP: newTotalXP,
        currentLevel: newLevel,
        levelName: newLevelName,
        currentXP: newCurrentXP,
        xpToNextLevel: newXPToNextLevel
      }
    });

    return NextResponse.json({ success: true, transaction, newTotalXP, newLevel, newLevelName });
  } catch (error) {
    console.error('Error granting XP:', error);
    return NextResponse.json({ error: 'Failed to grant XP' }, { status: 500 });
  }
}

