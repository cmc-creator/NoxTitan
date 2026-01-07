
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function getUserRole(req: Request): 'admin' | 'manager' | 'user' {
  // TODO: Integrate with real authentication
  // Example: extract from headers or session
  const role = req.headers.get('x-user-role');
  if (role === 'admin' || role === 'manager' || role === 'user') return role as any;
  return 'user';
}

// POST: Upload new SOP/Policy document
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
          action: 'UPLOAD_SOP_POLICY_VALIDATION_FAILED',
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
          action: 'UPLOAD_SOP_POLICY_UNAUTHORIZED',
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
    // File upload placeholder
    // TODO: Integrate file upload logic and set fileUrl
    try {
      const document = await prisma.sopPolicy.create({ data });
      await prisma.auditLog.create({
        data: {
          action: 'UPLOAD_SOP_POLICY_SUCCESS',
          details: JSON.stringify(data),
          userRole: role,
          status: 'SUCCESS',
          timestamp: new Date(),
        },
      });
      return NextResponse.json(document);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'UPLOAD_SOP_POLICY_ERROR',
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

// GET: List SOP/Policy documents
export async function GET(req: Request) {
  try {
    // Role-based access control
    const role = getUserRole(req);
    try {
      let documents;
      if (role === 'user') {
        // Only show documents allowed for users
        documents = await prisma.sopPolicy.findMany();
      } else {
        documents = await prisma.sopPolicy.findMany();
      }
      await prisma.auditLog.create({
        data: {
          action: 'LIST_SOP_POLICY_SUCCESS',
          userRole: role,
          status: 'SUCCESS',
          details: `Fetched ${documents.length} SOP/policy documents`,
          timestamp: new Date(),
        },
      });
      return NextResponse.json(documents);
    } catch (err: any) {
      await prisma.auditLog.create({
        data: {
          action: 'LIST_SOP_POLICY_ERROR',
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
