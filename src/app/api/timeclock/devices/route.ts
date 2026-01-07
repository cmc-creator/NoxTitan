import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const deviceSchema = z.object({
  name: z.string(),
  brand: z.string(),
  model: z.string().optional(),
  serialNumber: z.string().optional(),
  macAddress: z.string().optional(),
  ipAddress: z.string().optional(),
  location: z.string().optional(),
  apiKey: z.string().optional(),
  apiSecret: z.string().optional(),
  webhookUrl: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  geofenceRadius: z.number().optional(),
  requirePhoto: z.boolean().optional(),
  requireBiometric: z.boolean().optional(),
  allowEarlyClockIn: z.number().optional(),
  allowLateClockIn: z.number().optional(),
});

// GET - List all time clock devices
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const devices = await prisma.timeClockDevice.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(devices);
  } catch (error) {
    console.error('Failed to fetch devices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch devices' },
      { status: 500 }
    );
  }
}

// POST - Register a new time clock device
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = deviceSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const device = await prisma.timeClockDevice.create({
      data: {
        ...validation.data,
        userId: session.user.id,
      },
    });

    return NextResponse.json(device, { status: 201 });
  } catch (error) {
    console.error('Failed to register device:', error);
    return NextResponse.json(
      { error: 'Failed to register device' },
      { status: 500 }
    );
  }
}

// PATCH - Update device settings
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, ...updates } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Device ID required' }, { status: 400 });
    }

    // Verify device belongs to user
    const existing = await prisma.timeClockDevice.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    const device = await prisma.timeClockDevice.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(device);
  } catch (error) {
    console.error('Failed to update device:', error);
    return NextResponse.json(
      { error: 'Failed to update device' },
      { status: 500 }
    );
  }
}

// DELETE - Remove a device
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Device ID required' }, { status: 400 });
    }

    // Verify device belongs to user
    const existing = await prisma.timeClockDevice.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    await prisma.timeClockDevice.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete device:', error);
    return NextResponse.json(
      { error: 'Failed to delete device' },
      { status: 500 }
    );
  }
}
