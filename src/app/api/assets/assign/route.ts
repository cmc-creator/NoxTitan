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

// POST - Check out asset to employee
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { assetId, employeeId, expectedReturnDate, notes } = body;

    if (!assetId || !employeeId) {
      return NextResponse.json(
        { error: 'Asset ID and Employee ID are required' },
        { status: 400 }
      );
    }

    // Check if asset is available
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      return NextResponse.json(
        { error: 'Asset not found' },
        { status: 404 }
      );
    }

    if (asset.status !== 'AVAILABLE') {
      return NextResponse.json(
        { error: 'Asset is not available for checkout' },
        { status: 400 }
      );
    }

    // Create assignment
    const assignment = await prisma.assetAssignment.create({
      data: {
        assetId,
        employeeId,
        checkOutBy: session.user.email || 'System',
        expectedReturnDate: expectedReturnDate ? new Date(expectedReturnDate) : undefined,
        notes,
        userId: session.user.id,
      },
      include: {
        asset: true,
        employee: true,
      },
    });

    // Update asset status
    await prisma.asset.update({
      where: { id: assetId },
      data: {
        status: 'ASSIGNED',
        assignedToId: employeeId,
        assignedDate: new Date(),
        expectedReturnDate: expectedReturnDate ? new Date(expectedReturnDate) : undefined,
      },
    });

    return NextResponse.json(assignment);
  } catch (error) {
    console.error('Failed to check out asset:', error);
    return NextResponse.json(
      { error: 'Failed to check out asset' },
      { status: 500 }
    );
  }
}

// PATCH - Check in asset from employee
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { assignmentId, returnCondition, notes } = body;

    if (!assignmentId) {
      return NextResponse.json(
        { error: 'Assignment ID is required' },
        { status: 400 }
      );
    }

    // Get assignment
    const assignment = await prisma.assetAssignment.findUnique({
      where: { id: assignmentId },
      include: { asset: true },
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
        checkInDate: new Date(),
        checkInBy: session.user.email || 'System',
        returnCondition,
        notes,
      },
    });

    // Update asset status
    await prisma.asset.update({
      where: { id: assignment.assetId },
      data: {
        status: 'AVAILABLE',
        assignedToId: null,
        assignedDate: null,
        expectedReturnDate: null,
        condition: returnCondition || assignment.asset.condition,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to check in asset:', error);
    return NextResponse.json(
      { error: 'Failed to check in asset' },
      { status: 500 }
    );
  }
}

// GET - Get assignment history for asset
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const assetId = searchParams.get('assetId');
    const employeeId = searchParams.get('employeeId');

    const where: any = {
      userId: session.user.id,
    };

    if (assetId) where.assetId = assetId;
    if (employeeId) where.employeeId = employeeId;

    const assignments = await prisma.assetAssignment.findMany({
      where,
      include: {
        asset: {
          select: {
            assetTag: true,
            name: true,
          },
        },
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        checkOutDate: 'desc',
      },
    });

    return NextResponse.json(assignments);
  } catch (error) {
    console.error('Failed to fetch assignments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignments' },
      { status: 500 }
    );
  }
}
