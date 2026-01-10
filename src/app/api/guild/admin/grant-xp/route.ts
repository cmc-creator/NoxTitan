import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { employeeId, amount, source } = await request.json();

    if (!employeeId || !amount || !source) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create XP activity record
    const activity = await prisma.xPActivity.create({
      data: {
        employeeId,
        amount,
        type: 'ADMIN_GRANT',
        source
      }
    });

    // Update guild member's XP
    const guildMember = await prisma.guildMember.findUnique({
      where: { employeeId }
    });

    if (guildMember) {
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
        where: { employeeId },
        data: {
          totalXP: newTotalXP,
          currentLevel: newLevel,
          levelName: newLevelName,
          currentXP: newCurrentXP,
          xpToNextLevel: newXPToNextLevel
        }
      });
    }

    return NextResponse.json({ success: true, activity });
  } catch (error) {
    console.error('Error granting XP:', error);
    return NextResponse.json({ error: 'Failed to grant XP' }, { status: 500 });
  }
}
