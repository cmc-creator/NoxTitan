import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const libsql = createClient({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const prisma = new PrismaClient({ adapter });

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
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
