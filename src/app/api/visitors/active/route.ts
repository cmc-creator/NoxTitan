import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


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
