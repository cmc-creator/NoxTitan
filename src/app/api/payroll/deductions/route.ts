import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


// GET - Fetch payroll deductions
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
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
    const session = await auth();
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
