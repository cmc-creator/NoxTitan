// Example: API Route Implementation for Shifts
// Simplified version showing core patterns

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const shiftSchema = z.object({
  employeeId: z.string(),
  title: z.string().optional(),
  startTime: z.string(),
  endTime: z.string(),
  position: z.string().optional(),
  notes: z.string().optional(),
  color: z.string().optional(),
  breakMinutes: z.number().optional(),
  isHoliday: z.boolean().optional(),
});

// GET /api/shifts - Fetch shifts with date filtering
export async function GET(request: NextRequest) {
  // 1. Authenticate user
  const session = await getSession(); // Your auth implementation
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse query parameters
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  // 3. Build query filter
  const where: any = {
    userId: session.user.id,
  };

  if (startDate && endDate) {
    where.startTime = {
      gte: new Date(startDate),
      lte: new Date(endDate),
    };
  }

  // 4. Fetch from database
  const shifts = await db.shift.findMany({
    where,
    include: {
      employee: {
        select: {
          firstName: true,
          lastName: true,
          position: true,
          color: true,
        },
      },
    },
    orderBy: [{ startTime: 'asc' }],
  });

  // 5. Return response
  return NextResponse.json(shifts);
}

// POST /api/shifts - Create a new shift
export async function POST(request: NextRequest) {
  // 1. Authenticate user
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse and validate request body
  const body = await request.json();
  const validation = shiftSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: validation.error.issues },
      { status: 400 }
    );
  }

  const data = validation.data;

  // 3. Verify employee belongs to user
  const employee = await db.employee.findFirst({
    where: {
      id: data.employeeId,
      userId: session.user.id,
    },
  });

  if (!employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
  }

  // 4. Calculate shift details
  const shiftStart = new Date(data.startTime);
  const shiftEnd = new Date(data.endTime);
  const isNight = isNightShift(shiftStart, shiftEnd);
  const isWeekend = isWeekendShift(shiftStart);

  // 5. Calculate payroll if hourly rate exists
  let totalPay: number | undefined;
  let overtimeHours = 0;

  if (employee.hourlyRate) {
    // Get user's differential settings
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: {
        nightDifferential: true,
        weekendDifferential: true,
        holidayDifferential: true,
        overtimeRate: true,
      },
    });

    // Get weekly hours for overtime calculation
    const weekStart = getWeekStart(shiftStart);
    const weekEnd = getWeekEnd(weekStart);

    const weeklyShifts = await db.shift.findMany({
      where: {
        employeeId: data.employeeId,
        startTime: { gte: weekStart, lt: weekEnd },
      },
    });

    const weeklyHours = weeklyShifts.reduce((total, shift) => {
      return total + calculateHours(shift.startTime, shift.endTime);
    }, 0);

    // Calculate payroll with differentials
    const payroll = calculateShiftPayroll({
      startTime: shiftStart,
      endTime: shiftEnd,
      hourlyRate: employee.hourlyRate,
      breakMinutes: data.breakMinutes || 0,
      isHoliday: data.isHoliday || false,
      nightDifferential: user?.nightDifferential || 1.5,
      weekendDifferential: user?.weekendDifferential || 1.25,
      holidayDifferential: user?.holidayDifferential || 2.0,
      overtimeRate: user?.overtimeRate || 1.5,
      weeklyHoursWorked: weeklyHours,
    });

    totalPay = payroll.totalPay;
    overtimeHours = payroll.overtimeHours;
  }

  // 6. Create shift in database
  const shift = await db.shift.create({
    data: {
      userId: session.user.id,
      employeeId: data.employeeId,
      title: data.title,
      startTime: shiftStart,
      endTime: shiftEnd,
      position: data.position,
      notes: data.notes,
      color: data.color || employee.color,
      breakMinutes: data.breakMinutes || 0,
      isNightShift: isNight,
      isWeekend,
      isHoliday: data.isHoliday || false,
      overtimeHours,
      totalPay,
    },
    include: {
      employee: true,
    },
  });

  // 7. Send notifications
  await sendNotifications(shift, employee);

  // 8. Return created shift
  return NextResponse.json(shift, { status: 201 });
}

// PUT /api/shifts/[id] - Update a shift
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const shiftId = params.id;
  const body = await request.json();

  // Verify shift belongs to user
  const existingShift = await db.shift.findFirst({
    where: { id: shiftId, userId: session.user.id },
  });

  if (!existingShift) {
    return NextResponse.json({ error: 'Shift not found' }, { status: 404 });
  }

  // Update shift
  const updatedShift = await db.shift.update({
    where: { id: shiftId },
    data: {
      ...body,
      startTime: body.startTime ? new Date(body.startTime) : undefined,
      endTime: body.endTime ? new Date(body.endTime) : undefined,
    },
    include: { employee: true },
  });

  // Recalculate payroll if times changed
  if (body.startTime || body.endTime) {
    // ... recalculation logic
  }

  return NextResponse.json(updatedShift);
}

// DELETE /api/shifts/[id] - Delete a shift
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const shiftId = params.id;

  // Verify shift belongs to user
  const shift = await db.shift.findFirst({
    where: { id: shiftId, userId: session.user.id },
  });

  if (!shift) {
    return NextResponse.json({ error: 'Shift not found' }, { status: 404 });
  }

  // Delete shift
  await db.shift.delete({
    where: { id: shiftId },
  });

  return NextResponse.json({ success: true });
}

// Helper functions
function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getWeekEnd(weekStart: Date): Date {
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  return weekEnd;
}

function calculateHours(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
}

async function sendNotifications(shift: any, employee: any) {
  // Email notification
  if (employee.email) {
    await sendEmail({
      to: employee.email,
      subject: 'New Shift Assigned',
      body: `You have been assigned a new shift: ${shift.title || 'Shift'} on ${shift.startTime.toLocaleString()}`,
    });
  }

  // SMS notification
  if (employee.phone) {
    await sendSMS({
      to: employee.phone,
      message: `New shift: ${shift.title} on ${shift.startTime.toLocaleDateString()}`,
    });
  }

  // In-app notification
  await createNotification({
    userId: employee.userId,
    employeeId: employee.id,
    type: 'SHIFT_ASSIGNED',
    message: `New shift assigned: ${shift.title}`,
    link: `/calendar?date=${shift.startTime.toISOString()}`,
  });
}
