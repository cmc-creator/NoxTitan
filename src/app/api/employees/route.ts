import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const employeeSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  position: z.string().optional(),
  hourlyRate: z.number().optional(),
  color: z.string().optional(),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
          await prisma.auditLog.create({
            data: {
              action: 'EMPLOYEE_LIST_ATTEMPT',
              details: 'Unauthorized access attempt to employee list',
              userRole: 'unknown',
            },
          });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      const employees = await prisma.employee.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: { lastName: 'asc' },
      });
        await prisma.auditLog.create({
          data: {
            action: 'EMPLOYEE_LIST_SUCCESS',
            details: `Fetched ${employees.length} employees`,
            userRole: 'unknown',
          },
        });
      return NextResponse.json(employees);
    } catch (error) {
        await prisma.auditLog.create({
          data: {
            action: 'EMPLOYEE_LIST_ERROR',
            details: `Error: ${error instanceof Error ? error.message : String(error)}`,
            userRole: 'unknown',
          },
        });
      console.error('Failed to fetch employees:', error);
      return NextResponse.json(
        { error: 'Failed to fetch employees', details: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
          await prisma.auditLog.create({
            data: {
              action: 'EMPLOYEE_CREATE_ATTEMPT',
              details: 'Unauthorized create attempt',
              userRole: 'unknown',
            },
          });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Role-based access control removed or should be implemented with a valid property.

    const body = await request.json();
    // Input sanitization (basic example)
    Object.keys(body).forEach(key => {
      if (typeof body[key] === 'string') {
        body[key] = body[key].trim();
      }
    });
    const validation = employeeSchema.safeParse(body);

    if (!validation.success) {
          await prisma.auditLog.create({
            data: {
              action: 'EMPLOYEE_CREATE_VALIDATION_FAILED',
              details: JSON.stringify(validation.error.issues),
              userRole: 'unknown',
            },
          });
      return NextResponse.json(
        { error: validation.error.issues[0].message, details: validation.error.issues },
        { status: 400 }
      );
    }

    try {
      const employee = await prisma.employee.create({
        data: {
          ...validation.data,
          userId: session.user.id,
        },
      });
      await prisma.auditLog.create({
        data: {
          action: 'EMPLOYEE_CREATE_SUCCESS',
          details: `Created employee ${employee.id}`,
          userRole: 'unknown',
        },
      });
      return NextResponse.json(employee, { status: 201 });
    } catch (error) {
      await prisma.auditLog.create({
        data: {
          action: 'EMPLOYEE_CREATE_ERROR',
          details: `Error: ${error instanceof Error ? error.message : String(error)}`,
          userRole: 'unknown',
        },
      });
      console.error('Failed to create employee:', error);
      return NextResponse.json(
        { error: 'Failed to create employee', details: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
