
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function getUserRole(req: Request): 'admin' | 'manager' | 'user' {
  // TODO: Integrate with real authentication
  // Example: extract from headers or session
  const role = req.headers.get('x-user-role');
  if (role === 'admin' || role === 'manager' || role === 'user') return role as any;
  return 'user';
}

// POST: Create new report
export async function POST(req: Request) {
  try {
    let data = await req.json();
    // Input sanitization
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim();
      }
    });
    // Advanced validation
    if (!data.name || !data.type) {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_REPORT_VALIDATION_FAILED',
          details: JSON.stringify(data),
          userRole: getUserRole(req),
          status: 'FAILED',
          timestamp: new Date(),
        },
      });
      return NextResponse.json({ error: 'Name and type are required.' }, { status: 400 });
    }
    // Role-based access control
    const role = getUserRole(req);
    if (role !== 'admin' && role !== 'manager') {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_REPORT_UNAUTHORIZED',
          details: JSON.stringify(data),
          userRole: role,
          status: 'FAILED',
          timestamp: new Date(),
        },
      });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    // HIPAA/legal compliance check placeholder
    // TODO: Add real compliance logic
    try {
      const report = await prisma.report.create({ data });
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_REPORT_SUCCESS',
          details: JSON.stringify(data),
          userRole: role,
          status: 'SUCCESS',
          timestamp: new Date(),
        },
      });
      return NextResponse.json(report);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_REPORT_ERROR',
          details: err.message || String(err),
          userRole: role,
          status: 'FAILED',
          timestamp: new Date(),
        },
      });
      return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

// GET: List reports
export async function GET(req: Request) {
  try {
    // Role-based access control
    const role = getUserRole(req);
    try {
      let reports;
      if (role === 'user') {
        // Only show reports allowed for users
        reports = await prisma.report.findMany();
      } else {
        reports = await prisma.report.findMany();
      }
      await prisma.auditLog.create({
        data: {
          action: 'LIST_REPORTS_SUCCESS',
          userRole: role,
          status: 'SUCCESS',
          details: `Fetched ${reports.length} reports`,
          timestamp: new Date(),
        },
      });
      return NextResponse.json(reports);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'LIST_REPORTS_ERROR',
          userRole: role,
          status: 'FAILED',
          details: err.message || String(err),
          timestamp: new Date(),
        },
      });
      return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
