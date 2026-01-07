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
