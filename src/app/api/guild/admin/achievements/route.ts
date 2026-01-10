import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const achievements = await prisma.achievement.findMany({
      include: {
        _count: {
          select: {
            employeeAchievements: true
          }
        }
      }
    });

    const formattedAchievements = achievements.map(achievement => ({
      ...achievement,
      unlockCount: achievement._count.employeeAchievements
    }));

    return NextResponse.json(formattedAchievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json({ error: 'Failed to fetch achievements' }, { status: 500 });
  }
}
