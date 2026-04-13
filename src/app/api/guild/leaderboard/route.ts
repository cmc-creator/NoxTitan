import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const leaderboard = await prisma.guildMember.findMany({
      where: { userId: session.user.id },
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: [
        { totalXP: 'desc' },
        { currentLevel: 'desc' },
      ],
      take: 50,
    });

    // Update ranks
    await Promise.all(
      leaderboard.map((member, index) =>
        prisma.guildMember.update({
          where: { id: member.id },
          data: { rank: index + 1 },
        })
      )
    );

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}

