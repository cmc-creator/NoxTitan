import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const libsql = createClient({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const prisma = new PrismaClient({ adapter });

// GET - Fetch payroll deductions
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const employeeId = searchParams.get('employeeId');

    const where: any = {
      userId: session.user.id,
    };

    if (status) where.status = status;
    if (employeeId) where.employeeId = employeeId;

    const deductions = await prisma.payrollDeduction.findMany({
      where,
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
        asset: {
          select: {
            name: true,
            assetTag: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(deductions);
  } catch (error) {
    console.error('Failed to fetch deductions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deductions' },
      { status: 500 }
    );
  }
}

// PATCH - Update deduction status
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { deductionId, status } = body;

    if (!deductionId || !status) {
      return NextResponse.json(
        { error: 'Deduction ID and status are required' },
        { status: 400 }
      );
    }

    const updateData: any = { status };

    if (status === 'APPROVED') {
      updateData.approvedBy = session.user.email || 'System';
      updateData.approvedDate = new Date();
    }

    if (status === 'APPLIED') {
      updateData.appliedDate = new Date();
    }

    const deduction = await prisma.payrollDeduction.update({
      where: { id: deductionId },
      data: updateData,
    });

    // If applied, mark the assignment as deduction applied
    if (status === 'APPLIED' && deduction.assignmentId) {
      await prisma.assetAssignment.update({
        where: { id: deduction.assignmentId },
        data: { deductionApplied: true },
      });
    }

    return NextResponse.json(deduction);
  } catch (error) {
    console.error('Failed to update deduction:', error);
    return NextResponse.json(
      { error: 'Failed to update deduction' },
      { status: 500 }
    );
  }
}
