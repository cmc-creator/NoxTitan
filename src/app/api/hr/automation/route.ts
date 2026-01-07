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

// GET - Fetch automation rules
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const rules = await prisma.automationRule.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(rules);
  } catch (error) {
    console.error('Failed to fetch automation rules:', error);
    return NextResponse.json(
      { error: 'Failed to fetch automation rules' },
      { status: 500 }
    );
  }
}

// POST - Create automation rule
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      description,
      triggerType,
      triggerConfig,
      actionType,
      actionConfig,
    } = body;

    if (!name || !triggerType || !actionType) {
      return NextResponse.json(
        { error: 'Name, trigger type, and action type are required' },
        { status: 400 }
      );
    }

    // Calculate next run based on trigger
    const nextRun = calculateNextRun(triggerType, triggerConfig);

    const rule = await prisma.automationRule.create({
      data: {
        name,
        description,
        triggerType,
        triggerConfig: triggerConfig || {},
        actionType,
        actionConfig: actionConfig || {},
        nextRun,
        userId: session.user.id,
      },
    });

    return NextResponse.json(rule);
  } catch (error) {
    console.error('Failed to create automation rule:', error);
    return NextResponse.json(
      { error: 'Failed to create automation rule' },
      { status: 500 }
    );
  }
}

// PATCH - Update automation rule
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { ruleId, isActive } = body;

    if (!ruleId) {
      return NextResponse.json(
        { error: 'Rule ID is required' },
        { status: 400 }
      );
    }

    const rule = await prisma.automationRule.update({
      where: { id: ruleId },
      data: {
        isActive: isActive !== undefined ? isActive : undefined,
      },
    });

    return NextResponse.json(rule);
  } catch (error) {
    console.error('Failed to update automation rule:', error);
    return NextResponse.json(
      { error: 'Failed to update automation rule' },
      { status: 500 }
    );
  }
}

function calculateNextRun(triggerType: string, triggerConfig: any): Date {
  const now = new Date();
  const daysAfter = triggerConfig?.daysAfter || 30;

  switch (triggerType) {
    case 'TIME_INTERVAL':
      const nextRun = new Date(now);
      nextRun.setDate(nextRun.getDate() + daysAfter);
      return nextRun;
    
    case 'HIRE_DATE':
    case 'ANNIVERSARY':
      // Will be calculated per employee
      const futureDate = new Date(now);
      futureDate.setDate(futureDate.getDate() + daysAfter);
      return futureDate;
    
    default:
      const defaultDate = new Date(now);
      defaultDate.setDate(defaultDate.getDate() + daysAfter);
      return defaultDate;
  }
}
