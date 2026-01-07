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

// GET - Fetch employee surveys
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const surveyType = searchParams.get('surveyType');
    const employeeId = searchParams.get('employeeId');

    const where: any = {
      userId: session.user.id,
    };

    if (surveyType) where.surveyType = surveyType;
    if (employeeId) where.employeeId = employeeId;

    const surveys = await prisma.employeeSurvey.findMany({
      where,
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
      orderBy: {
        scheduledDate: 'desc',
      },
    });

    return NextResponse.json(surveys);
  } catch (error) {
    console.error('Failed to fetch surveys:', error);
    return NextResponse.json(
      { error: 'Failed to fetch surveys' },
      { status: 500 }
    );
  }
}

// POST - Create survey
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { employeeId, surveyType, dayMilestone } = body;

    if (!employeeId || !surveyType || !dayMilestone) {
      return NextResponse.json(
        { error: 'Employee ID, survey type, and day milestone are required' },
        { status: 400 }
      );
    }

    // Get employee hire date
    const employee = await prisma.employee.findFirst({
      where: {
        id: employeeId,
        userId: session.user.id,
      },
    });

    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404 }
      );
    }

    // Calculate scheduled date based on today + milestone
    const scheduledDate = new Date();
    scheduledDate.setDate(scheduledDate.getDate() + dayMilestone);

    const survey = await prisma.employeeSurvey.create({
      data: {
        employeeId,
        surveyType,
        dayMilestone,
        scheduledDate,
        userId: session.user.id,
      },
      include: {
        employee: true,
      },
    });

    return NextResponse.json(survey);
  } catch (error) {
    console.error('Failed to create survey:', error);
    return NextResponse.json(
      { error: 'Failed to create survey' },
      { status: 500 }
    );
  }
}

// PATCH - Update survey (send or complete)
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { surveyId, action, score, feedback, responses } = body;

    if (!surveyId || !action) {
      return NextResponse.json(
        { error: 'Survey ID and action are required' },
        { status: 400 }
      );
    }

    let updateData: any = {};

    if (action === 'send') {
      updateData.sentAt = new Date();
    } else if (action === 'complete') {
      updateData.completedAt = new Date();
      if (score) updateData.score = score;
      if (feedback) updateData.feedback = feedback;
      if (responses) updateData.responses = responses;
    }

    const survey = await prisma.employeeSurvey.update({
      where: { id: surveyId },
      data: updateData,
      include: {
        employee: true,
      },
    });

    return NextResponse.json(survey);
  } catch (error) {
    console.error('Failed to update survey:', error);
    return NextResponse.json(
      { error: 'Failed to update survey' },
      { status: 500 }
    );
  }
}
