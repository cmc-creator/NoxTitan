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

// POST - Treasury checkout with digital signature
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      assetId,
      employeeId,
      expectedReturnDate,
      notes,
      digitalSignature,
      acknowledgedValue,
    } = body;

    if (!assetId || !employeeId || !digitalSignature) {
      return NextResponse.json(
        { error: 'Asset ID, Employee ID, and Digital Signature are required' },
        { status: 400 }
      );
    }

    // Check if asset is available
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }

    if (asset.status !== 'AVAILABLE') {
      return NextResponse.json(
        { error: 'Asset is not available for checkout' },
        { status: 400 }
      );
    }

    // Get client IP for audit trail
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Create assignment with digital signature
    const assignment = await prisma.assetAssignment.create({
      data: {
        assetId,
        employeeId,
        checkOutBy: session.user.email || 'System',
        expectedReturnDate: expectedReturnDate ? new Date(expectedReturnDate) : undefined,
        notes,
        digitalSignature,
        employeeAcknowledgment: true,
        acknowledgedValue: acknowledgedValue || asset.currentValue || 0,
        signedAt: new Date(),
        signatureIp: clientIp,
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
