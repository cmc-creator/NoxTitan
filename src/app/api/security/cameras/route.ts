import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cameras = await prisma.securityCamera.findMany({
      where: { userId: session.user.id },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(cameras);
  } catch (error) {
    console.error('Failed to fetch cameras:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cameras' },
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

    const camera = await prisma.securityCamera.create({
      data: {
        ...body,
        userId: session.user.id,
        lastOnline: new Date(),
      },
    });

    return NextResponse.json(camera);
  } catch (error) {
    console.error('Failed to create camera:', error);
    return NextResponse.json(
      { error: 'Failed to create camera' },
      { status: 500 }
    );
  }
}

