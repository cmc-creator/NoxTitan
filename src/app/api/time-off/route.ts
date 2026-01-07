import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const timeOffSchema = z.object({
  employeeId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  reason: z.string().optional(),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const requests = await prisma.timeOffRequest.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        employee: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(requests);
  } catch (error) {
    console.error('Failed to fetch time-off requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch time-off requests' },
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
    const validation = timeOffSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { employeeId, startDate, endDate, reason } = validation.data;

    // Verify employee belongs to user
    const employee = await prisma.employee.findFirst({
      where: { id: employeeId, userId: session.user.id },
    });

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    const timeOffRequest = await prisma.timeOffRequest.create({
      data: {
        userId: session.user.id,
        employeeId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
      },
      include: {
        employee: true,
      },
    });

    return NextResponse.json(timeOffRequest, { status: 201 });
  } catch (error) {
    console.error('Failed to create time-off request:', error);
    return NextResponse.json(
      { error: 'Failed to create time-off request' },
      { status: 500 }
    );
  }
}
