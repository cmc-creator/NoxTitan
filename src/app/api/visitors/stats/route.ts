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

    // Currently in building
    const currentlyInBuilding = await prisma.visitorLog.count({
      where: {
        userId: session.user.id,
        status: 'CHECKED_IN',
        checkOutTime: null,
      },
    });

    // Today's total
    const todayTotal = await prisma.visitorLog.count({
      where: {
        userId: session.user.id,
        checkInTime: {
          gte: todayStart,
        },
      },
    });

    // Overdue checkouts (expected duration passed but not checked out)
    const overdue = await prisma.visitorLog.count({
      where: {
        userId: session.user.id,
        status: 'CHECKED_IN',
        checkOutTime: null,
        expectedDuration: {
          not: null,
        },
      },
    });

    // Watchlist alerts today
    const watchlistAlerts = await prisma.visitorLog.count({
      where: {
        userId: session.user.id,
        checkInTime: {
          gte: todayStart,
        },
        visitor: {
          isWatchlist: true,
        },
      },
    });

    // Average duration (for completed visits today)
    const completedToday = await prisma.visitorLog.findMany({
      where: {
        userId: session.user.id,
        checkInTime: {
          gte: todayStart,
        },
        checkOutTime: {
          not: null,
        },
      },
      select: {
        checkInTime: true,
        checkOutTime: true,
      },
    });

    let avgDuration = 0;
    if (completedToday.length > 0) {
      const totalMinutes = completedToday.reduce((sum, visit) => {
        if (visit.checkOutTime) {
          const diff = visit.checkOutTime.getTime() - visit.checkInTime.getTime();
          return sum + Math.floor(diff / 60000);
        }
        return sum;
      }, 0);
      avgDuration = Math.round(totalMinutes / completedToday.length);
    }

    return NextResponse.json({
      currentlyInBuilding,
      todayTotal,
      overdue,
      watchlistAlerts,
      avgDuration,
    });
  } catch (error) {
    console.error('Failed to fetch visitor stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor stats' },
      { status: 500 }
    );
  }
}
