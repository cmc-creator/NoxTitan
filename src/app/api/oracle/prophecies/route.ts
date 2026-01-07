import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next/auth';
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
    const status = searchParams.get('status') || 'ACTIVE';

    const prophecies = await prisma.prophecy.findMany({
      where: {
        userId: session.user.id,
        status: status as any,
      },
      include: {
        targetEmployee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: [
        { severity: 'desc' },
        { confidence: 'desc' },
      ],
      take: 20,
    });

    return NextResponse.json(prophecies);
  } catch (error) {
    console.error('Failed to fetch prophecies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prophecies' },
      { status: 500 }
    );
  }
}
