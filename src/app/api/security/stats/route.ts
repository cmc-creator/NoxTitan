import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function GET(request: NextRequest) {
  try {
    const session = await auth();
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
