import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const breakSchema = z.object({
  timeClockEntryId: z.string(),
  breakType: z.enum(['MEAL', 'REST', 'UNPAID']),
  isPaid: z.boolean().optional(),
});

// Start a break
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = breakSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { timeClockEntryId, breakType, isPaid } = validation.data;

    // Verify entry belongs to user
    const entry = await prisma.timeClockEntry.findFirst({
      where: {
        id: timeClockEntryId,
        userId: session.user.id,
        status: 'CLOCKED_IN',
      },
    });

    if (!entry) {
      return NextResponse.json(
        { error: 'Time clock entry not found or not active' },
        { status: 404 }
      );
    }

    // Create break entry
    const breakEntry = await prisma.breakEntry.create({
      data: {
        timeClockEntryId,
        breakType,
        startTime: new Date(),
        isPaid: isPaid ?? (breakType === 'REST'),
      },
    });

    // Update time clock entry status
    await prisma.timeClockEntry.update({
      where: { id: timeClockEntryId },
      data: { status: 'ON_BREAK' },
    });

    return NextResponse.json(breakEntry, { status: 201 });
  } catch (error) {
    console.error('Failed to start break:', error);
    return NextResponse.json(
      { error: 'Failed to start break' },
      { status: 500 }
    );
  }
}

// End a break
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { breakId, timeClockEntryId } = await request.json();

    if (!breakId) {
      return NextResponse.json({ error: 'breakId is required' }, { status: 400 });
    }

    // Get the break entry
    const breakEntry = await prisma.breakEntry.findFirst({
      where: { id: breakId },
      include: {
        timeClockEntry: true,
      },
    });

    if (!breakEntry || breakEntry.timeClockEntry.userId !== session.user.id) {
      return NextResponse.json({ error: 'Break not found' }, { status: 404 });
    }

    if (breakEntry.endTime) {
      return NextResponse.json(
        { error: 'Break already ended' },
        { status: 400 }
      );
    }

    const endTime = new Date();
    const duration = Math.floor(
      (endTime.getTime() - breakEntry.startTime.getTime()) / (1000 * 60)
    );

    // Update break entry
    const updated = await prisma.breakEntry.update({
      where: { id: breakId },
      data: {
        endTime,
        duration,
      },
    });

    // Update time clock entry status back to CLOCKED_IN
    await prisma.timeClockEntry.update({
      where: { id: breakEntry.timeClockEntryId },
      data: { status: 'CLOCKED_IN' },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to end break:', error);
    return NextResponse.json(
      { error: 'Failed to end break' },
      { status: 500 }
    );
  }
}
