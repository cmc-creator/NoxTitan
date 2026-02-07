import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const doors = await prisma.door.findMany({
      where: { userId: session.user.id },
      include: {
        accessSystem: {
          select: {
            name: true,
            systemType: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(doors);
  } catch (error) {
    console.error('Failed to fetch doors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doors' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    const door = await prisma.door.create({
      data: {
        ...body,
        userId: session.user.id,
      },
    });

    return NextResponse.json(door);
  } catch (error) {
    console.error('Failed to create door:', error);
    return NextResponse.json(
      { error: 'Failed to create door' },
      { status: 500 }
    );
  }
}
