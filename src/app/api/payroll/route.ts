import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { calculateWeeklyPayroll } from '@/lib/payroll';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const employeeId = searchParams.get('employeeId');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'startDate and endDate are required' },
        { status: 400 }
      );
    }

    // Get user's differential settings
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        nightDifferential: true,
        weekendDifferential: true,
        holidayDifferential: true,
        overtimeRate: true,
      },
    });

    const where: any = {
      userId: session.user.id,
      startTime: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    };

    if (employeeId) {
      where.employeeId = employeeId;
    }

    // Get all shifts in date range
    const shifts = await prisma.shift.findMany({
      where,
      include: {
        employee: true,
      },
      orderBy: {
        startTime: 'asc',
      },
    });

    // Group shifts by employee
    const employeeShifts = new Map<string, typeof shifts>();
    
    for (const shift of shifts) {
      const empId = shift.employeeId;
      if (!employeeShifts.has(empId)) {
        employeeShifts.set(empId, []);
      }
      employeeShifts.get(empId)!.push(shift);
    }

    // Calculate payroll for each employee
    const payrollData = Array.from(employeeShifts.entries()).map(([empId, empShifts]) => {
      const employee = empShifts[0].employee;
      
      if (!employee.hourlyRate) {
        return {
          employeeId: empId,
          employeeName: `${employee.firstName} ${employee.lastName}`,
          hourlyRate: null,
          totalHours: 0,
          regularHours: 0,
          overtimeHours: 0,
          totalPay: 0,
          shifts: [],
        };
      }

      const shiftData = empShifts.map(shift => ({
        startTime: shift.startTime,
        endTime: shift.endTime,
        hourlyRate: employee.hourlyRate!,
        breakMinutes: shift.breakMinutes || 0,
        isHoliday: shift.isHoliday,
      }));

      const calculation = calculateWeeklyPayroll(shiftData, {
        nightDifferential: user?.nightDifferential || 1.5,
        weekendDifferential: user?.weekendDifferential || 1.25,
        holidayDifferential: user?.holidayDifferential || 2.0,
        overtimeRate: user?.overtimeRate || 1.5,
      });

      return {
        employeeId: empId,
        employeeName: `${employee.firstName} ${employee.lastName}`,
        position: employee.position,
        hourlyRate: employee.hourlyRate,
        ...calculation,
      };
    });

    // Calculate totals
    const totals = {
      totalEmployees: payrollData.length,
      totalHours: payrollData.reduce((sum, emp) => sum + emp.totalHours, 0),
      regularHours: payrollData.reduce((sum, emp) => sum + emp.regularHours, 0),
      overtimeHours: payrollData.reduce((sum, emp) => sum + emp.overtimeHours, 0),
      totalPay: payrollData.reduce((sum, emp) => sum + emp.totalPay, 0),
    };

    return NextResponse.json({
      startDate,
      endDate,
      differentialRates: {
        night: user?.nightDifferential || 1.5,
        weekend: user?.weekendDifferential || 1.25,
        holiday: user?.holidayDifferential || 2.0,
        overtime: user?.overtimeRate || 1.5,
      },
      employees: payrollData,
      totals,
    });
  } catch (error) {
    console.error('Failed to calculate payroll:', error);
    return NextResponse.json(
      { error: 'Failed to calculate payroll' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      nightDifferential,
      weekendDifferential,
      holidayDifferential,
      overtimeRate,
    } = body;

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        nightDifferential,
        weekendDifferential,
        holidayDifferential,
        overtimeRate,
      },
    });

    return NextResponse.json({
      message: 'Differential rates updated successfully',
      rates: {
        nightDifferential: user.nightDifferential,
        weekendDifferential: user.weekendDifferential,
        holidayDifferential: user.holidayDifferential,
        overtimeRate: user.overtimeRate,
      },
    });
  } catch (error) {
    console.error('Failed to update differential rates:', error);
    return NextResponse.json(
      { error: 'Failed to update rates' },
      { status: 500 }
    );
  }
}
