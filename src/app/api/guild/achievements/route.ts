import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');

    const achievements = await prisma.achievement.findMany({
      where: { userId: session.user.id },
      orderBy: [
        { rarity: 'desc' },
        { name: 'asc' },
      ],
    });

    // If employee ID provided, check which are unlocked
    if (employeeId) {
      const guildMember = await prisma.guildMember.findUnique({
        where: { employeeId },
        include: {
          achievements: {
            include: {
              achievement: true,
            },
          },
        },
      });

      if (guildMember) {
        const unlockedIds = new Set(guildMember.achievements.map(a => a.achievementId));
        return NextResponse.json(
          achievements.map(a => ({
            ...a,
            unlocked: unlockedIds.has(a.id),
            unlockedAt: guildMember.achievements.find(ua => ua.achievementId === a.id)?.unlockedAt,
          }))
        );
      }
    }

    return NextResponse.json(achievements.map(a => ({ ...a, unlocked: false })));
  } catch (error) {
    console.error('Failed to fetch achievements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch achievements' },
      { status: 500 }
    );
  }
}
