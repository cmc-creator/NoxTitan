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

// GET - Fetch HR tasks
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');

    const where: any = {
      userId: session.user.id,
    };

    if (type) where.type = type;
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const tasks = await prisma.hRTask.findMany({
      where,
      include: {
        relatedEmployee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        manager: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: [
        { status: 'asc' },
        { dueDate: 'asc' },
      ],
    });

    // Update overdue tasks
    const now = new Date();
    const overdueTasks = tasks.filter(
      t => t.status === 'PENDING' && new Date(t.dueDate) < now
    );

    for (const task of overdueTasks) {
      await prisma.hRTask.update({
        where: { id: task.id },
        data: { status: 'OVERDUE' },
      });
    }

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Failed to fetch HR tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

// POST - Create HR task
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      description,
      type,
      priority,
      dueDate,
      relatedEmployeeId,
      managerId,
    } = body;

    if (!title || !type || !dueDate) {
      return NextResponse.json(
        { error: 'Title, type, and due date are required' },
        { status: 400 }
      );
    }

    const task = await prisma.hRTask.create({
      data: {
        title,
        description,
        type,
        priority: priority || 'MEDIUM',
        dueDate: new Date(dueDate),
        relatedEmployeeId: relatedEmployeeId || undefined,
        managerId: managerId || undefined,
        userId: session.user.id,
      },
      include: {
        relatedEmployee: true,
        manager: true,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to create HR task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}

// PATCH - Update HR task
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { taskId, status, completedAt } = body;

    if (!taskId) {
      return NextResponse.json(
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    const updateData: any = {};
    if (status) updateData.status = status;
    if (status === 'COMPLETED' && !completedAt) {
      updateData.completedAt = new Date();
    }

    const task = await prisma.hRTask.update({
      where: { id: taskId },
      data: updateData,
      include: {
        relatedEmployee: true,
        manager: true,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to update HR task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

// DELETE - Delete HR task
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('id');

    if (!taskId) {
      return NextResponse.json(
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    await prisma.hRTask.delete({
      where: { id: taskId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete HR task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
