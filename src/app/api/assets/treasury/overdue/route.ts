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

// GET - Check for overdue assets and flag for payroll deduction
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const now = new Date();

    // Find all assignments that are overdue (not checked in and past expected return date)
    const overdueAssignments = await prisma.assetAssignment.findMany({
      where: {
        userId: session.user.id,
        checkInDate: null, // Not returned yet
        expectedReturnDate: {
          lt: now, // Past due date
        },
        isOverdue: false, // Not already marked
      },
      include: {
        asset: true,
        employee: true,
      },
    });

    const flaggedCount = overdueAssignments.length;
    const results = [];

    // Mark as overdue and flag for payroll
    for (const assignment of overdueAssignments) {
      // Update assignment
      await prisma.assetAssignment.update({
        where: { id: assignment.id },
        data: {
          isOverdue: true,
          overdueDate: now,
          payrollFlagged: true,
          payrollFlaggedDate: now,
          deductionAmount: assignment.acknowledgedValue || assignment.asset.currentValue || 0,
        },
      });

      // Create payroll deduction record
      const deduction = await prisma.payrollDeduction.create({
        data: {
          employeeId: assignment.employeeId,
          assetId: assignment.assetId,
          assignmentId: assignment.id,
          deductionType: 'UNRETURNED_ASSET',
          amount: assignment.acknowledgedValue || assignment.asset.currentValue || 0,
          reason: `Unreturned asset: ${assignment.asset.name} (${assignment.asset.assetTag}). Expected return: ${assignment.expectedReturnDate?.toLocaleDateString()}`,
          scheduledDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days grace period
          userId: session.user.id,
        },
        include: {
          employee: true,
          asset: true,
        },
      });

      results.push({
        assignment,
        deduction,
      });
    }

    return NextResponse.json({
      flaggedCount,
      results,
    });
  } catch (error) {
    console.error('Failed to check overdue assets:', error);
    return NextResponse.json(
      { error: 'Failed to check overdue assets' },
      { status: 500 }
    );
  }
}

// POST - Manually flag an assignment for payroll deduction
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { assignmentId, deductionType, amount, reason } = body;

    if (!assignmentId) {
      return NextResponse.json(
        { error: 'Assignment ID is required' },
        { status: 400 }
      );
    }

    const assignment = await prisma.assetAssignment.findUnique({
      where: { id: assignmentId },
      include: { asset: true, employee: true },
    });

    if (!assignment) {
      return NextResponse.json(
        { error: 'Assignment not found' },
        { status: 404 }
      );
    }

    // Update assignment
    await prisma.assetAssignment.update({
      where: { id: assignmentId },
      data: {
        payrollFlagged: true,
        payrollFlaggedDate: new Date(),
        deductionAmount: amount || assignment.acknowledgedValue || assignment.asset.currentValue || 0,
      },
    });

    // Create payroll deduction
    const deduction = await prisma.payrollDeduction.create({
      data: {
        employeeId: assignment.employeeId,
        assetId: assignment.assetId,
        assignmentId: assignment.id,
        deductionType: deductionType || 'UNRETURNED_ASSET',
        amount: amount || assignment.acknowledgedValue || assignment.asset.currentValue || 0,
        reason: reason || `Asset deduction for ${assignment.asset.name}`,
        scheduledDate: new Date(),
        userId: session.user.id,
      },
    });

    return NextResponse.json(deduction);
  } catch (error) {
    console.error('Failed to flag for payroll deduction:', error);
    return NextResponse.json(
      { error: 'Failed to flag for payroll deduction' },
      { status: 500 }
    );
  }
}
