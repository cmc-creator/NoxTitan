
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function getUserRole(req: Request): 'admin' | 'manager' | 'user' {
  // TODO: Integrate with real authentication
  return 'admin';
}

// POST: Upload new template
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Advanced validation
    if (!data.name || !data.type) {
      return NextResponse.json({ error: 'Name and type are required.' }, { status: 400 });
    }
    // Role-based access control
    const role = getUserRole(req);
    if (role !== 'admin' && role !== 'manager') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    // HIPAA/legal compliance check placeholder
    // TODO: Add real compliance logic
    // Audit logging
    await prisma.auditLog.create({
      data: {
        action: 'UPLOAD_TEMPLATE',
        details: JSON.stringify(data),
        userRole: role,
        timestamp: new Date(),
      },
    });
    // File upload placeholder
    // TODO: Integrate file upload logic and set fileUrl
    const template = await prisma.template.create({ data });
    return NextResponse.json(template);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

// GET: List templates
export async function GET(req: Request) {
  try {
    // Role-based access control
    const role = getUserRole(req);
    if (role === 'user') {
      // Only show templates allowed for users
      const templates = await prisma.template.findMany();
      return NextResponse.json(templates);
    }
    const templates = await prisma.template.findMany();
    return NextResponse.json(templates);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
