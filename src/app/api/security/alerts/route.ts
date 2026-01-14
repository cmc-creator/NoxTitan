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
    const status = searchParams.get('status');

    const where: any = { userId: session.user.id };
    if (status) where.status = status;

    const alerts = await prisma.securityAlert.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      take: 50,
    });

    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Failed to fetch alerts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alerts' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { alertId, status } = body;

    const updateData: any = { status };

    if (status === 'ACKNOWLEDGED') {
      updateData.acknowledgedBy = session.user.email;
      updateData.acknowledgedAt = new Date();
    } else if (status === 'RESOLVED' || status === 'FALSE_ALARM') {
      updateData.resolvedBy = session.user.email;
      updateData.resolvedAt = new Date();
    }

    const alert = await prisma.securityAlert.update({
      where: { id: alertId },
      data: updateData,
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to update alert:', error);
    return NextResponse.json(
      { error: 'Failed to update alert' },
      { status: 500 }
    );
  }
}
