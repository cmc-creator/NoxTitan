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

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [camerasOnline, camerasTotal, doorsOnline, doorsTotal, activeAlerts, todayEvents] = await Promise.all([
      prisma.securityCamera.count({
        where: {
          userId: session.user.id,
          status: 'ONLINE',
        },
      }),
      prisma.securityCamera.count({
        where: { userId: session.user.id },
      }),
      prisma.door.count({
        where: {
          userId: session.user.id,
          status: { not: 'ALARM' },
        },
      }),
      prisma.door.count({
        where: { userId: session.user.id },
      }),
      prisma.securityAlert.count({
        where: {
          userId: session.user.id,
          status: 'ACTIVE',
        },
      }),
      prisma.accessEvent.count({
        where: {
          userId: session.user.id,
          timestamp: {
            gte: todayStart,
          },
        },
      }),
    ]);

    return NextResponse.json({
      camerasOnline,
      camerasTotal,
      doorsOnline,
      doorsTotal,
      activeAlerts,
      todayEvents,
    });
  } catch (error) {
    console.error('Failed to fetch security stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch security stats' },
      { status: 500 }
    );
  }
}
