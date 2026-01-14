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

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'ACTIVE';

    const prophecies = await prisma.prophecy.findMany({
      where: {
        userId: session.user.id,
        status: status as any,
      },
      include: {
        targetEmployee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: [
        { severity: 'desc' },
        { confidence: 'desc' },
      ],
      take: 20,
    });

    return NextResponse.json(prophecies);
  } catch (error) {
    console.error('Failed to fetch prophecies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prophecies' },
      { status: 500 }
    );
  }
}
