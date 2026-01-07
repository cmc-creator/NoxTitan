import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function getUserRole(req: Request): 'admin' | 'manager' | 'user' {
  const role = req.headers.get('x-user-role');
  if (role === 'admin' || role === 'manager' || role === 'user') return role as any;
  return 'user';
}

// GET: Advanced analytics dashboard
export async function GET(req: Request) {
  const role = getUserRole(req);
  if (role === 'user') {
    return NextResponse.json({ error: 'Forbidden: Analytics for managers/admins only' }, { status: 403 });
  }
  try {
    // Example KPIs and charts
    const totalEmployees = await prisma.employee.count();
    const totalShifts = await prisma.shift.count();
    const totalReports = await prisma.report.count();
    const totalAutomations = await prisma.automation.count();
    const activeAutomations = await prisma.automation.count({ where: { isActive: true } });
    const recentShifts = await prisma.shift.findMany({
      orderBy: { startTime: 'desc' },
      take: 10,
      include: { employee: true },
    });
    // Example: Shifts per employee
    const shiftsPerEmployee = await prisma.shift.groupBy({
      by: ['employeeId'],
      _count: { id: true },
    });
    // Example: Payroll totals (last 30 days)
    const payrollTotals = await prisma.shift.aggregate({
      _sum: { totalPay: true },
      where: {
        startTime: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
    });
    // Audit log
    await prisma.auditLog.create({
      data: {
        action: 'ANALYTICS_DASHBOARD_VIEW',
        userRole: role,
        status: 'SUCCESS',
        details: 'Viewed analytics dashboard',
        timestamp: new Date(),
      },
    });
    return NextResponse.json({
      kpis: {
        totalEmployees,
        totalShifts,
        totalReports,
        totalAutomations,
        activeAutomations,
        payrollTotals: payrollTotals._sum.totalPay || 0,
      },
      recentShifts,
      shiftsPerEmployee,
    });
  } catch (err: any) {
    await prisma.auditLog.create({
      data: {
        action: 'ANALYTICS_DASHBOARD_ERROR',
        userRole: role,
        status: 'FAILED',
        details: err.message || String(err),
        timestamp: new Date(),
      },
    });
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

// POST: Custom analytics query (for charts, exports, etc.)
export async function POST(req: Request) {
  const role = getUserRole(req);
  if (role === 'user') {
    return NextResponse.json({ error: 'Forbidden: Analytics for managers/admins only' }, { status: 403 });
  }
  try {
    const { type, params } = await req.json();
    let result;
    // Example: Custom queries
    if (type === 'shiftsByDate') {
      result = await prisma.shift.findMany({
        where: {
          startTime: {
            gte: new Date(params.startDate),
            lte: new Date(params.endDate),
          },
        },
        include: { employee: true },
      });
    } else if (type === 'payrollSummary') {
      result = await prisma.shift.aggregate({
        _sum: { totalPay: true },
        where: {
          startTime: {
            gte: new Date(params.startDate),
            lte: new Date(params.endDate),
          },
        },
      });
    } else {
      return NextResponse.json({ error: 'Unknown analytics query type' }, { status: 400 });
    }
    await prisma.auditLog.create({
      data: {
        action: 'ANALYTICS_CUSTOM_QUERY',
        userRole: role,
        status: 'SUCCESS',
        details: `Custom query: ${type}`,
        timestamp: new Date(),
      },
    });
    return NextResponse.json({ result });
  } catch (err: any) {
    await prisma.auditLog.create({
      data: {
        action: 'ANALYTICS_CUSTOM_QUERY_ERROR',
        userRole: role,
        status: 'FAILED',
        details: err.message || String(err),
        timestamp: new Date(),
      },
    });
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
