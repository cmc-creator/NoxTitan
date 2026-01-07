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

// GET - Fetch all assets
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const categoryId = searchParams.get('categoryId');

    const where: any = {
      userId: session.user.id,
    };

    if (status) where.status = status;
    if (categoryId) where.categoryId = categoryId;

    const assets = await prisma.asset.findMany({
      where,
      include: {
        category: {
          select: {
            name: true,
            icon: true,
          },
        },
        assignedTo: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(assets);
  } catch (error) {
    console.error('Failed to fetch assets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assets' },
      { status: 500 }
    );
  }
}

// POST - Create new asset
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      assetTag,
      name,
      description,
      categoryId,
      serialNumber,
      barcode,
      manufacturer,
      model,
      purchaseDate,
      purchasePrice,
      location,
      building,
      room,
      status,
      condition,
    } = body;

    if (!assetTag || !name || !categoryId) {
      return NextResponse.json(
        { error: 'Asset tag, name, and category are required' },
        { status: 400 }
      );
    }

    // Check for duplicate asset tag
    const existing = await prisma.asset.findUnique({
      where: { assetTag },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Asset tag already exists' },
        { status: 400 }
      );
    }

    const asset = await prisma.asset.create({
      data: {
        assetTag,
        name,
        description,
        categoryId,
        serialNumber,
        barcode,
        manufacturer,
        model,
        purchaseDate: purchaseDate ? new Date(purchaseDate) : undefined,
        purchasePrice,
        currentValue: purchasePrice, // Initial value = purchase price
        location,
        building,
        room,
        status: status || 'AVAILABLE',
        condition: condition || 'GOOD',
        userId: session.user.id,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(asset);
  } catch (error) {
    console.error('Failed to create asset:', error);
    return NextResponse.json(
      { error: 'Failed to create asset' },
      { status: 500 }
    );
  }
}

// PATCH - Update asset
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { assetId, ...updateData } = body;

    if (!assetId) {
      return NextResponse.json(
        { error: 'Asset ID is required' },
        { status: 400 }
      );
    }

    const asset = await prisma.asset.update({
      where: { id: assetId },
      data: updateData,
      include: {
        category: true,
        assignedTo: true,
      },
    });

    return NextResponse.json(asset);
  } catch (error) {
    console.error('Failed to update asset:', error);
    return NextResponse.json(
      { error: 'Failed to update asset' },
      { status: 500 }
    );
  }
}

// DELETE - Delete asset
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const assetId = searchParams.get('id');

    if (!assetId) {
      return NextResponse.json(
        { error: 'Asset ID is required' },
        { status: 400 }
      );
    }

    await prisma.asset.delete({
      where: { id: assetId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete asset:', error);
    return NextResponse.json(
      { error: 'Failed to delete asset' },
      { status: 500 }
    );
  }
}
