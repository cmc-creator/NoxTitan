
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Simulated user/role extraction (replace with real auth)
function getUserRole(req: Request): 'admin' | 'manager' | 'user' {
  // TODO: Integrate with real authentication
  // Example: extract from headers or session
  const role = req.headers.get('x-user-role');
  if (role === 'admin' || role === 'manager' || role === 'user') return role as any;
  return 'user';
}

// POST: Create new automation
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
    if (!data.name || !data.trigger || !data.action) {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_AUTOMATION_VALIDATION_FAILED',
          details: JSON.stringify(data),
          userRole: getUserRole(req),
          status: 'FAILED',
          timestamp: new Date(),
        },
      });
      return NextResponse.json({ error: 'Name, trigger, and action are required.' }, { status: 400 });
    }
    // Role-based access control
    const role = getUserRole(req);
    if (role !== 'admin' && role !== 'manager') {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_AUTOMATION_UNAUTHORIZED',
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
      const automation = await prisma.automation.create({ data });
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_AUTOMATION_SUCCESS',
          details: JSON.stringify(data),
          userRole: role,
          status: 'SUCCESS',
          timestamp: new Date(),
        },
      });
      return NextResponse.json(automation);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'CREATE_AUTOMATION_ERROR',
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

// GET: List automations
export async function GET(req: Request) {
  try {
    // Role-based access control
    const role = getUserRole(req);
    try {
      let automations;
      if (role === 'user') {
        // Only show active automations to regular users
        automations = await prisma.automation.findMany({ where: { isActive: true } });
      } else {
        automations = await prisma.automation.findMany();
      }
      await prisma.auditLog.create({
        data: {
          action: 'LIST_AUTOMATIONS_SUCCESS',
          userRole: role,
          status: 'SUCCESS',
          details: `Fetched ${automations.length} automations`,
          timestamp: new Date(),
        },
      });
      return NextResponse.json(automations);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'LIST_AUTOMATIONS_ERROR',
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
