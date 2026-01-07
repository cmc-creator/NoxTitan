import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!['APPROVED', 'REJECTED'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Verify request belongs to user
    const existing = await prisma.timeOffRequest.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    const updated = await prisma.timeOffRequest.update({
      where: { id },
      data: { status },
      include: { employee: true },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update time-off request:', error);
    return NextResponse.json(
      { error: 'Failed to update time-off request' },
      { status: 500 }
    );
  }
}
