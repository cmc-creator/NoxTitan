import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { calculateShiftPayroll, isNightShift, isWeekendShift } from '@/lib/payroll';
import { sendEmailNotification, sendSMSNotification, sendInAppNotification } from '@/lib/notifications';

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

export async function GET(request: NextRequest) {
	try {
		const session = await getServerSession(authOptions);
		if (!session?.user?.id) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_LIST_ATTEMPT',
					details: 'Unauthorized access attempt to shift list',
					userRole: 'unknown',
				},
			});
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		try {
			const { searchParams } = new URL(request.url);
			const startDate = searchParams.get('startDate');
			const endDate = searchParams.get('endDate');

			const where: any = {
				userId: session.user.id,
			};

			if (startDate && endDate) {
				where.startTime = {
					gte: new Date(startDate),
					lte: new Date(endDate),
				};
			}

			const shifts = await prisma.shift.findMany({
				where,
				include: {
					employee: true,
				},
				orderBy: [
					{ startTime: 'asc' }
				],
			});
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_LIST_SUCCESS',
					details: `Fetched ${shifts.length} shifts`,
					userRole: 'unknown',
				},
			});
			return NextResponse.json(shifts);
		} catch (error) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_LIST_ERROR',
					details: `Error: ${error instanceof Error ? error.message : String(error)}`,
					userRole: 'unknown',
				},
			});
			console.error('Failed to fetch shifts:', error);
			return NextResponse.json(
				{ error: 'Failed to fetch shifts', details: error instanceof Error ? error.message : String(error) },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error('Failed to fetch shifts:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch shifts' },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const session = await getServerSession(authOptions);
		if (!session?.user?.id) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_CREATE_ATTEMPT',
					details: 'Unauthorized create attempt',
					userRole: 'unknown',
				},
			});
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const body = await request.json();
		Object.keys(body).forEach(key => {
			if (typeof body[key] === 'string') {
				body[key] = body[key].trim();
			}
		});
		const validation = shiftSchema.safeParse(body);

		if (!validation.success) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_CREATE_VALIDATION_FAILED',
					details: JSON.stringify(validation.error.issues),
					userRole: 'unknown',
				},
			});
			return NextResponse.json(
				{ error: validation.error.issues[0].message, details: validation.error.issues },
				{ status: 400 }
			);
		}

		const { employeeId, title, startTime, endTime, position, notes, color, breakMinutes, isHoliday } = validation.data;

		// Verify employee belongs to user
		const employee = await prisma.employee.findFirst({
			where: { id: employeeId, userId: session.user.id },
		});

		if (!employee) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_CREATE_EMPLOYEE_NOT_FOUND',
					details: `Employee not found: ${employeeId}`,
					userRole: 'unknown',
				},
			});
			return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
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

		// Calculate payroll data
		const shiftStart = new Date(startTime);
		const shiftEnd = new Date(endTime);
		const isNight = isNightShift(shiftStart, shiftEnd);
		const isWeekend = isWeekendShift(shiftStart);

		// Calculate total pay if employee has hourly rate
		let totalPay: number | undefined;
		let overtimeHours = 0;

		if (employee.hourlyRate) {
			// Get weekly hours to calculate overtime
			const weekStart = new Date(shiftStart);
			weekStart.setDate(weekStart.getDate() - weekStart.getDay());
			weekStart.setHours(0, 0, 0, 0);

			const weekEnd = new Date(weekStart);
			weekEnd.setDate(weekEnd.getDate() + 7);

			const weeklyShifts = await prisma.shift.findMany({
				where: {
					employeeId,
					startTime: {
						gte: weekStart,
						lt: weekEnd,
					},
				},
			});

			const weeklyHours = weeklyShifts.reduce((total, shift) => {
				const hours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
				return total + hours;
			}, 0);

			const payroll = calculateShiftPayroll({
				startTime: shiftStart,
				endTime: shiftEnd,
				hourlyRate: employee.hourlyRate,
				breakMinutes: breakMinutes || 0,
				isHoliday: isHoliday || false,
				nightDifferential: user?.nightDifferential || 1.5,
				weekendDifferential: user?.weekendDifferential || 1.25,
				holidayDifferential: user?.holidayDifferential || 2.0,
				overtimeRate: user?.overtimeRate || 1.5,
				weeklyHoursWorked: weeklyHours,
			});

			totalPay = payroll.totalPay;
			overtimeHours = payroll.overtimeHours;
		}

		try {
			const shift = await prisma.shift.create({
				data: {
					userId: session.user.id,
					employeeId,
					title,
					startTime: shiftStart,
					endTime: shiftEnd,
					position,
					notes,
					color: color || employee.color,
					breakMinutes: breakMinutes || 0,
					isNightShift: isNight,
					isWeekend,
					isHoliday: isHoliday || false,
					overtimeHours,
					totalPay,
				},
				include: {
					employee: true,
				},
			});
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_CREATE_SUCCESS',
					details: `Created shift ${shift.id}`,
					userRole: 'unknown',
				},
			});
			// Real-time notifications
			if (employee.email) {
				await sendEmailNotification(
					employee.email,
					'New Shift Assigned',
					`Hi ${employee.firstName}, you have a new shift: ${title || 'Shift'} on ${shiftStart.toLocaleString()} - ${shiftEnd.toLocaleString()}`
				);
			}
			if (employee.phone) {
				await sendSMSNotification(
					employee.phone,
					`New shift assigned: ${title || 'Shift'} on ${shiftStart.toLocaleString()} - ${shiftEnd.toLocaleString()}`
				);
			}
			await sendInAppNotification(
				employee.id,
				`New shift assigned: ${title || 'Shift'} on ${shiftStart.toLocaleString()} - ${shiftEnd.toLocaleString()}`
			);
			return NextResponse.json(shift, { status: 201 });
		} catch (error) {
			await prisma.auditLog.create({
				data: {
					action: 'SHIFT_CREATE_ERROR',
					details: `Error: ${error instanceof Error ? error.message : String(error)}`,
					userRole: 'unknown',
				},
			});
			console.error('Failed to create shift:', error);
			return NextResponse.json(
				{ error: 'Failed to create shift', details: error instanceof Error ? error.message : String(error) },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error('Failed to create shift:', error);
		return NextResponse.json(
			{ error: 'Failed to create shift' },
			{ status: 500 }
		);
	}
}

