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

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Fetch all employees with their data
    const employees = await prisma.employee.findMany({
      where: { userId: session.user.id },
      include: {
        timeOffRequests: {
          where: { createdAt: { gte: thirtyDaysAgo } },
        },
        surveys: {
          where: { completedAt: { gte: thirtyDaysAgo } },
        },
        timeClockEntries: {
          where: { clockIn: { gte: thirtyDaysAgo } },
        },
        shifts: {
          where: { startTime: { gte: sevenDaysAgo } },
        },
      },
    });

    const prophecies = [];
    const riskScores = [];

    // Analyze each employee
    for (const employee of employees) {
      // FLIGHT RISK DETECTION
      const flightRiskScore = calculateFlightRisk(employee);
      if (flightRiskScore > 60) {
        const prophecy = await prisma.prophecy.create({
          data: {
            prophecyType: 'FLIGHT_RISK',
            severity: flightRiskScore > 80 ? 'CRITICAL' : 'HIGH',
            title: `${employee.firstName} ${employee.lastName} - High Flight Risk`,
            prediction: `This employee shows ${flightRiskScore.toFixed(0)}% likelihood of resignation within 30 days based on behavioral patterns.`,
            confidence: flightRiskScore,
            targetEmployeeId: employee.id,
            impactDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
            dataPoints: {
              timeOffRequests: employee.timeOffRequests.length,
              surveyScores: employee.surveys.map(s => s.score),
              recentAbsences: employee.timeClockEntries.filter(e => !e.clockOut).length,
            },
            recommendations: [
              'Schedule one-on-one meeting immediately',
              'Review compensation and benefits',
              'Check for workplace conflicts or issues',
              'Offer career development opportunities',
            ],
            userId: session.user.id,
          },
        });
        prophecies.push(prophecy);

        // Create risk score
        await prisma.riskScore.create({
          data: {
            employeeId: employee.id,
            riskType: 'FLIGHT_RISK',
            score: flightRiskScore,
            factors: getFlightRiskFactors(employee),
            trend: 'INCREASING',
            userId: session.user.id,
          },
        });
      }

      // BURNOUT DETECTION
      const burnoutScore = calculateBurnoutRisk(employee);
      if (burnoutScore > 70) {
        await prisma.prophecy.create({
          data: {
            prophecyType: 'BURNOUT',
            severity: burnoutScore > 85 ? 'CRITICAL' : 'HIGH',
            title: `${employee.firstName} - Burnout Warning`,
            prediction: `Employee showing ${burnoutScore.toFixed(0)}% burnout risk. Immediate intervention required to prevent breakdown.`,
            confidence: burnoutScore,
            targetEmployeeId: employee.id,
            impactDate: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000),
            dataPoints: {
              recentShifts: employee.shifts.length,
              averageHours: calculateAverageHours(employee.timeClockEntries),
              consecutiveDays: 0, // Calculate this
            },
            recommendations: [
              'Reduce scheduled hours immediately',
              'Mandate time off',
              'Check for signs of stress or depression',
              'Redistribute workload to team',
            ],
            userId: session.user.id,
          },
        });

        await prisma.riskScore.create({
          data: {
            employeeId: employee.id,
            riskType: 'BURNOUT_RISK',
            score: burnoutScore,
            factors: getBurnoutFactors(employee),
            trend: 'INCREASING',
            userId: session.user.id,
          },
        });
      }

      // ATTENDANCE RISK
      const attendanceScore = calculateAttendanceRisk(employee);
      if (attendanceScore > 65) {
        await prisma.riskScore.create({
          data: {
            employeeId: employee.id,
            riskType: 'ATTENDANCE_RISK',
            score: attendanceScore,
            factors: getAttendanceFactors(employee),
            trend: 'STABLE',
            userId: session.user.id,
          },
        });
      }
    }

    // STAFFING INSIGHTS
    const allShifts = await prisma.shift.findMany({
      where: {
        userId: session.user.id,
        startTime: {
          gte: now,
          lte: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        },
      },
    });

    const uncoveredShifts = allShifts.filter(s => !s.employeeId);
    if (uncoveredShifts.length > 3) {
      await prisma.prophecy.create({
        data: {
          prophecyType: 'STAFFING_SHORTAGE',
          severity: 'HIGH',
          title: 'Critical Staffing Shortage Ahead',
          prediction: `${uncoveredShifts.length} shifts remain unfilled in the next 7 days. Service disruption imminent.`,
          confidence: 95,
          impactDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
          dataPoints: {
            uncoveredShifts: uncoveredShifts.length,
            affectedDates: uncoveredShifts.map(s => s.startTime),
          },
          recommendations: [
            'Call in part-time staff immediately',
            'Offer overtime incentives',
            'Contact temp agency',
            'Prepare for reduced services',
          ],
          userId: session.user.id,
        },
      });
    }

    // OVERTIME PREDICTIONS
    const overtimeEmployees = await detectOvertimeRisk(session.user.id);
    for (const emp of overtimeEmployees) {
      await prisma.prophecy.create({
        data: {
          prophecyType: 'OVERTIME_VIOLATION',
          severity: 'MEDIUM',
          title: `${emp.name} - Overtime Violation Incoming`,
          prediction: `If scheduled for ${emp.nextShift}, will exceed 40 hours and trigger overtime costs.`,
          confidence: 98,
          targetEmployeeId: emp.employeeId,
          impactDate: emp.violationDate,
          dataPoints: {
            currentHours: emp.currentHours,
            threshold: 40,
            scheduledShift: emp.nextShift,
          },
          recommendations: [
            'Reassign upcoming shift to another employee',
            'Split shift between two employees',
            'Adjust schedule to avoid overtime',
          ],
          userId: session.user.id,
        },
      });
    }

    return NextResponse.json({
      propheciesCreated: prophecies.length,
      riskScoresUpdated: riskScores.length,
      message: 'Oracle analysis complete',
    });
  } catch (error) {
    console.error('Oracle analysis failed:', error);
    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    );
  }
}

function calculateFlightRisk(employee: any): number {
  let risk = 0;

  // Low survey scores
  const recentSurveys = employee.surveys.filter((s: any) => s.score !== null);
  if (recentSurveys.length > 0) {
    const avgScore = recentSurveys.reduce((sum: number, s: any) => sum + (s.score || 0), 0) / recentSurveys.length;
    if (avgScore < 6) risk += 30;
    else if (avgScore < 7) risk += 20;
  }

  // Increased time off requests
  if (employee.timeOffRequests.length > 3) risk += 25;

  // Pattern changes (simplified)
  if (employee.timeClockEntries.length < 10) risk += 20;

  // Tenure (new employees higher risk)
  const tenure = new Date().getTime() - new Date(employee.hireDate).getTime();
  const tenureDays = tenure / (1000 * 60 * 60 * 24);
  if (tenureDays < 90) risk += 15;

  return Math.min(risk, 100);
}

function calculateBurnoutRisk(employee: any): number {
  let risk = 0;

  // Too many shifts
  if (employee.shifts.length > 6) risk += 35;

  // Long hours
  const totalHours = calculateAverageHours(employee.timeClockEntries);
  if (totalHours > 50) risk += 40;
  else if (totalHours > 45) risk += 25;

  // No days off
  if (employee.timeOffRequests.length === 0) risk += 20;

  return Math.min(risk, 100);
}

function calculateAttendanceRisk(employee: any): number {
  let risk = 0;

  const missedPunches = employee.timeClockEntries.filter((e: any) => !e.clockOut).length;
  if (missedPunches > 2) risk += 40;

  const lateArrival = employee.timeClockEntries.filter((e: any) => {
    // Simplified: would check if clockIn is after scheduled start
    return false;
  }).length;
  if (lateArrival > 3) risk += 30;

  return Math.min(risk, 100);
}

function calculateAverageHours(entries: any[]): number {
  if (entries.length === 0) return 0;
  const totalMs = entries.reduce((sum, e) => {
    if (!e.clockOut) return sum;
    return sum + (new Date(e.clockOut).getTime() - new Date(e.clockIn).getTime());
  }, 0);
  return totalMs / (1000 * 60 * 60) / 4; // Average per week (assuming 4 weeks)
}

function getFlightRiskFactors(employee: any): string[] {
  const factors = [];
  if (employee.surveys.length > 0) {
    const avgScore = employee.surveys.reduce((sum: number, s: any) => sum + (s.score || 0), 0) / employee.surveys.length;
    if (avgScore < 7) factors.push(`Low satisfaction score: ${avgScore.toFixed(1)}/10`);
  }
  if (employee.timeOffRequests.length > 3) factors.push(`${employee.timeOffRequests.length} recent time-off requests`);
  if (employee.timeClockEntries.length < 10) factors.push('Declining attendance pattern');
  return factors;
}

function getBurnoutFactors(employee: any): string[] {
  const factors = [];
  if (employee.shifts.length > 6) factors.push(`${employee.shifts.length} shifts in 7 days`);
  const hours = calculateAverageHours(employee.timeClockEntries);
  if (hours > 45) factors.push(`${hours.toFixed(1)} average hours/week`);
  if (employee.timeOffRequests.length === 0) factors.push('No time off taken');
  return factors;
}

function getAttendanceFactors(employee: any): string[] {
  const factors = [];
  const missed = employee.timeClockEntries.filter((e: any) => !e.clockOut).length;
  if (missed > 0) factors.push(`${missed} missed clock-outs`);
  return factors;
}

async function detectOvertimeRisk(userId: string): Promise<any[]> {
  // Simplified - would calculate current hours + upcoming shifts
  return [];
}
