import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const clockInSchema = z.object({
  employeeId: z.string(),
  shiftId: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  deviceType: z.string().optional(),
  deviceId: z.string().optional(),
  deviceBrand: z.string().optional(),
  ipAddress: z.string().optional(),
  photoUrl: z.string().optional(),
  biometricId: z.string().optional(),
  badgeNumber: z.string().optional(),
});

const clockOutSchema = z.object({
  timeClockEntryId: z.string(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  photoUrl: z.string().optional(),
});

// GET - Retrieve time clock entries
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const status = searchParams.get('status');

    const where: any = {
      userId: session.user.id,
    };

    if (employeeId) where.employeeId = employeeId;
    if (status) where.status = status;
    if (startDate && endDate) {
      where.clockIn = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const entries = await prisma.timeClockEntry.findMany({
      where,
      include: {
        employee: true,
        shift: true,
        breakEntries: true,
      },
      orderBy: {
        clockIn: 'desc',
      },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error('Failed to fetch time clock entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}

// POST - Clock In
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = clockInSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Verify employee belongs to user
    const employee = await prisma.employee.findFirst({
      where: { id: data.employeeId, userId: session.user.id },
    });

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    // Check if already clocked in
    const activeEntry = await prisma.timeClockEntry.findFirst({
      where: {
        employeeId: data.employeeId,
        status: { in: ['CLOCKED_IN', 'ON_BREAK'] },
      },
    });

    if (activeEntry) {
      return NextResponse.json(
        { error: 'Employee is already clocked in' },
        { status: 400 }
      );
    }

    const clockIn = new Date();
    let isLate = false;
    let lateMinutes = 0;
    let isWithinGeofence = true;

    // Check if clocking in for a scheduled shift
    if (data.shiftId) {
      const shift = await prisma.shift.findFirst({
        where: { id: data.shiftId, userId: session.user.id },
      });

      if (shift) {
        const scheduledStart = shift.startTime.getTime();
        const actualStart = clockIn.getTime();
        const diffMinutes = (actualStart - scheduledStart) / (1000 * 60);

        if (diffMinutes > 5) {
          isLate = true;
          lateMinutes = Math.floor(diffMinutes);
        }
      }
    }

    // Check geofencing if coordinates provided
    if (data.latitude && data.longitude) {
      const devices = await prisma.timeClockDevice.findMany({
        where: { userId: session.user.id, isActive: true },
      });

      if (devices.length > 0) {
        const withinAnyGeofence = devices.some((device) => {
          if (!device.latitude || !device.longitude || !device.geofenceRadius) return false;
          
          const distance = calculateDistance(
            data.latitude!,
            data.longitude!,
            device.latitude,
            device.longitude
          );
          
          return distance <= device.geofenceRadius;
        });

        isWithinGeofence = withinAnyGeofence;
      }
    }

    const entry = await prisma.timeClockEntry.create({
      data: {
        userId: session.user.id,
        employeeId: data.employeeId,
        shiftId: data.shiftId,
        clockIn,
        clockInLat: data.latitude,
        clockInLng: data.longitude,
        deviceType: data.deviceType,
        deviceId: data.deviceId,
        deviceBrand: data.deviceBrand,
        ipAddress: data.ipAddress,
        photoClockIn: data.photoUrl,
        biometricId: data.biometricId,
        badgeNumber: data.badgeNumber,
        isLate,
        lateMinutes,
        isWithinGeofence,
        status: 'CLOCKED_IN',
      },
      include: {
        employee: true,
        shift: true,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Failed to clock in:', error);
    return NextResponse.json(
      { error: 'Failed to clock in' },
      { status: 500 }
    );
  }
}

// PATCH - Clock Out
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = clockOutSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Get the entry
    const entry = await prisma.timeClockEntry.findFirst({
      where: {
        id: data.timeClockEntryId,
        userId: session.user.id,
      },
      include: {
        shift: true,
        breakEntries: true,
      },
    });

    if (!entry) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }

    if (entry.status === 'CLOCKED_OUT') {
      return NextResponse.json(
        { error: 'Already clocked out' },
        { status: 400 }
      );
    }

    const clockOut = new Date();
    const totalMilliseconds = clockOut.getTime() - entry.clockIn.getTime();
    
    // Subtract break time
    const breakMinutes = entry.breakEntries.reduce((sum, breakEntry) => {
      if (breakEntry.endTime) {
        const breakMs = breakEntry.endTime.getTime() - breakEntry.startTime.getTime();
        return sum + (breakMs / (1000 * 60));
      }
      return sum;
    }, 0);
    
    const totalHours = (totalMilliseconds / (1000 * 60 * 60)) - (breakMinutes / 60);

    // Check if left early
    let isEarlyOut = false;
    let earlyMinutes = 0;

    if (entry.shift) {
      const scheduledEnd = entry.shift.endTime.getTime();
      const actualEnd = clockOut.getTime();
      const diffMinutes = (scheduledEnd - actualEnd) / (1000 * 60);

      if (diffMinutes > 5) {
        isEarlyOut = true;
        earlyMinutes = Math.floor(diffMinutes);
      }
    }

    // Check for missed meal break (6+ hours without 30+ minute break)
    let missedMealBreak = false;
    if (totalHours >= 6) {
      const hasMealBreak = entry.breakEntries.some(
        (b) => b.breakType === 'MEAL' && b.duration && b.duration >= 30
      );
      missedMealBreak = !hasMealBreak;
    }

    const updated = await prisma.timeClockEntry.update({
      where: { id: data.timeClockEntryId },
      data: {
        clockOut,
        clockOutLat: data.latitude,
        clockOutLng: data.longitude,
        photoClockOut: data.photoUrl,
        totalHours,
        isEarlyOut,
        earlyMinutes,
        missedMealBreak,
        status: 'CLOCKED_OUT',
      },
      include: {
        employee: true,
        shift: true,
        breakEntries: true,
      },
    });

    // Create compliance violation if meal break missed
    if (missedMealBreak) {
      await prisma.complianceViolation.create({
        data: {
          userId: session.user.id,
          employeeId: entry.employeeId,
          ruleId: 'MEAL_BREAK_DEFAULT',
          timeClockEntryId: entry.id,
          violationDate: clockOut,
          description: `Missed meal break - worked ${totalHours.toFixed(2)} hours without 30-minute meal break`,
          severity: 'HIGH',
        },
      });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to clock out:', error);
    return NextResponse.json(
      { error: 'Failed to clock out' },
      { status: 500 }
    );
  }
}

// Helper: Calculate distance between two coordinates (Haversine formula)
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}
