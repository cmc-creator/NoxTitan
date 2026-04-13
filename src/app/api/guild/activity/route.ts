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
    const employeeId = searchParams.get('employeeId');

    if (!employeeId) {
      return NextResponse.json({ error: 'Employee ID required' }, { status: 400 });
    }

    const guildMember = await prisma.guildMember.findUnique({
      where: { employeeId },
    });

    if (!guildMember) {
      return NextResponse.json([]);
    }

    const activities = await prisma.xPTransaction.findMany({
      where: { guildMemberId: guildMember.id },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Failed to fetch activity:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activity' },
      { status: 500 }
    );
  }
}

