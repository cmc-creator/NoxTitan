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

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { employeeId, paymentMethod, items } = await request.json();

    if (!employeeId || !paymentMethod || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Fetch all items with prices
    const itemIds = items.map((i: any) => i.itemId);
    const merchItems = await prisma.merchItem.findMany({
      where: {
        id: { in: itemIds },
        isActive: true,
      },
      include: {
        store: true,
      },
    });

    if (merchItems.length !== itemIds.length) {
      return NextResponse.json({ error: 'Some items not found' }, { status: 400 });
    }

    // Calculate totals
    let totalAmount = 0;
    let totalXP = 0;

    const orderItems = items.map((item: any) => {
      const merchItem = merchItems.find(m => m.id === item.itemId)!;
      const subtotal = merchItem.price * item.quantity;
      totalAmount += subtotal;

      if (paymentMethod === 'GUILD_XP' && merchItem.redeemableWithXP && merchItem.xpCost) {
        totalXP += merchItem.xpCost * item.quantity;
      }

      return {
        itemId: item.itemId,
        quantity: item.quantity,
        unitPrice: merchItem.price,
        variantInfo: item.variantInfo,
        subtotal,
      };
    });

    // If paying with XP, check balance
    if (paymentMethod === 'GUILD_XP') {
      const guildMember = await prisma.guildMember.findUnique({
        where: { employeeId },
      });

      if (!guildMember || guildMember.totalXP < totalXP) {
        return NextResponse.json({ error: 'Insufficient XP' }, { status: 400 });
      }
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create order in transaction
    const order = await prisma.$transaction(async (tx) => {
      // Create the order
      const newOrder = await tx.merchOrder.create({
        data: {
          storeId: merchItems[0].storeId,
          employeeId,
          orderNumber,
          paymentMethod: paymentMethod as any,
          totalAmount,
          xpSpent: paymentMethod === 'GUILD_XP' ? totalXP : null,
          status: 'PENDING',
          userId: session.user.id,
          items: {
            create: orderItems,
          },
        },
        include: {
          items: {
            include: {
              item: true,
            },
          },
        },
      });

      // If payroll deduction, create deduction record
      if (paymentMethod === 'PAYROLL_DEDUCTION') {
        await tx.payrollDeduction.create({
          data: {
            employeeId,
            amount: totalAmount,
            reason: `Merch Store Purchase: Order ${orderNumber}`,
            status: 'PENDING',
            userId: session.user.id,
            deductionType: 'OTHER',
            scheduledDate: new Date(),
            merchOrder: {
              connect: { id: newOrder.id },
            },
          },
        });
      }

      // If XP payment, deduct XP
      if (paymentMethod === 'GUILD_XP') {
        const guildMember = await tx.guildMember.findUnique({
          where: { employeeId },
        });

        if (guildMember) {
          await tx.guildMember.update({
            where: { id: guildMember.id },
            data: {
              totalXP: { decrement: totalXP },
            },
          });

          // Create XP transaction
          await tx.xPTransaction.create({
            data: {
              guildMemberId: guildMember.id,
              amount: -totalXP,
              type: 'SPENT_REWARD',
              source: `Merch Store: ${orderNumber}`,
              relatedId: newOrder.id,
            },
          });
        }
      }

      return newOrder;
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: 'Order creation failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');

    const where: any = { userId: session.user.id };
    if (employeeId) {
      where.employeeId = employeeId;
    }

    const orders = await prisma.merchOrder.findMany({
      where,
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        items: {
          include: {
            item: true,
          },
        },
        store: {
          select: {
            name: true,
            platform: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
