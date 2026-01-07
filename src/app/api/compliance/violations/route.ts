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

// GET - Fetch compliance violations
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const severity = searchParams.get('severity');
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const where: any = {
      timeClockEntry: {
        employee: {
          userId: session.user.id,
        },
      },
    };

    if (severity) where.severity = severity;
    if (status) where.status = status;
    if (startDate || endDate) {
      where.detectedAt = {};
      if (startDate) where.detectedAt.gte = new Date(startDate);
      if (endDate) where.detectedAt.lte = new Date(endDate);
    }

    const violations = await prisma.complianceViolation.findMany({
      where,
      include: {
        timeClockEntry: {
          include: {
            employee: {
              select: {
                firstName: true,
                lastName: true,
                position: true,
              },
            },
          },
        },
      },
      orderBy: [
        { severity: 'desc' },
        { violationDate: 'desc' },
      ],
    });

    return NextResponse.json(violations);
  } catch (error) {
    console.error('Failed to fetch violations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch violations' },
      { status: 500 }
    );
  }
}

// PATCH - Resolve violation
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { violationId, resolution, status = 'RESOLVED' } = body;

    if (!violationId) {
      return NextResponse.json(
        { error: 'Violation ID is required' },
        { status: 400 }
      );
    }

    // Verify violation belongs to user's organization
    const violation = await prisma.complianceViolation.findFirst({
      where: {
        id: violationId,
        timeClockEntry: {
          employee: {
            userId: session.user.id,
          },
        },
      },
    });

    if (!violation) {
      return NextResponse.json(
        { error: 'Violation not found' },
        { status: 404 }
      );
    }

    const updated = await prisma.complianceViolation.update({
      where: { id: violationId },
      data: {
        status,
        resolution,
        resolvedAt: new Date(),
        resolvedBy: session.user.email || undefined,
      },
      include: {
        timeClockEntry: {
          include: {
            employee: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to resolve violation:', error);
    return NextResponse.json(
      { error: 'Failed to resolve violation' },
      { status: 500 }
    );
  }
}
