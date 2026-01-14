import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const achievements = await prisma.achievement.findMany({
      include: {
        _count: {
          select: {
            unlocks: true
          }
        }
      }
    });

    const formattedAchievements = achievements.map(achievement => ({
      ...achievement,
      unlockCount: achievement._count.unlocks
    }));

    return NextResponse.json(formattedAchievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json({ error: 'Failed to fetch achievements' }, { status: 500 });
  }
}
