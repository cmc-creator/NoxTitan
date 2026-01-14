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

    const risks = await prisma.riskScore.findMany({
      where: {
        userId: session.user.id,
        score: { gte: 60 }, // Only show significant risks
      },
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        score: 'desc',
      },
      take: 9,
    });

    return NextResponse.json(risks);
  } catch (error) {
    console.error('Failed to fetch risk scores:', error);
    return NextResponse.json(
      { error: 'Failed to fetch risk scores' },
      { status: 500 }
    );
  }
}
