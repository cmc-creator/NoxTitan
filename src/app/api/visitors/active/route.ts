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

    const activeVisitors = await prisma.visitorLog.findMany({
      where: {
        userId: session.user.id,
        status: 'CHECKED_IN',
        checkOutTime: null,
      },
      include: {
        visitor: {
          select: {
            firstName: true,
            lastName: true,
            company: true,
            isWatchlist: true,
            isVIP: true,
          },
        },
        hostEmployee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        checkInTime: 'asc',
      },
    });

    const formatted = activeVisitors.map(visit => ({
      ...visit,
      hostName: visit.hostEmployee 
        ? `${visit.hostEmployee.firstName} ${visit.hostEmployee.lastName}`
        : visit.hostName,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Failed to fetch active visitors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch active visitors' },
      { status: 500 }
    );
  }
}
