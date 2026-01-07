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

    const doors = await prisma.door.findMany({
      where: { userId: session.user.id },
      include: {
        accessSystem: {
          select: {
            name: true,
            systemType: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(doors);
  } catch (error) {
    console.error('Failed to fetch doors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doors' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    const door = await prisma.door.create({
      data: {
        ...body,
        userId: session.user.id,
      },
    });

    return NextResponse.json(door);
  } catch (error) {
    console.error('Failed to create door:', error);
    return NextResponse.json(
      { error: 'Failed to create door' },
      { status: 500 }
    );
  }
}
