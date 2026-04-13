import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { rewardId, employeeId } = await request.json();

    if (!rewardId || !employeeId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get reward
    const reward = await prisma.reward.findUnique({
      where: { id: rewardId },
    });

    if (!reward || !reward.isActive) {
      return NextResponse.json({ error: 'Reward not available' }, { status: 400 });
    }

    // Check stock
    if (reward.stockQuantity !== null && reward.stockQuantity <= 0) {
      return NextResponse.json({ error: 'Out of stock' }, { status: 400 });
    }

    // Get guild member
    const guildMember = await prisma.guildMember.findUnique({
      where: { employeeId },
    });

    if (!guildMember) {
      return NextResponse.json({ error: 'Guild member not found' }, { status: 404 });
    }

    // Check if they have enough XP
    if (guildMember.totalXP < reward.xpCost) {
      return NextResponse.json({ error: 'Insufficient XP' }, { status: 400 });
    }

    // Process purchase in transaction
    const purchase = await prisma.$transaction(async (tx) => {
      // Deduct XP
      await tx.guildMember.update({
        where: { id: guildMember.id },
        data: {
          totalXP: { decrement: reward.xpCost },
        },
      });

      // Create XP transaction
      await tx.xPTransaction.create({
        data: {
          guildMemberId: guildMember.id,
          amount: -reward.xpCost,
          type: 'SPENT_REWARD',
          source: `Purchased: ${reward.name}`,
          relatedId: reward.id,
        },
      });

      // Decrease stock if applicable
      if (reward.stockQuantity !== null) {
        await tx.reward.update({
          where: { id: reward.id },
          data: {
            stockQuantity: { decrement: 1 },
          },
        });
      }

      // Create purchase record
      return await tx.rewardPurchase.create({
        data: {
          guildMemberId: guildMember.id,
          rewardId: reward.id,
          xpSpent: reward.xpCost,
          redemptionCode: reward.redemptionCode,
        },
      });
    });

    return NextResponse.json(purchase);
  } catch (error) {
    console.error('Purchase failed:', error);
    return NextResponse.json(
      { error: 'Purchase failed' },
      { status: 500 }
    );
  }
}

