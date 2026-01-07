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

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const text = await file.text();
    const lines = text.split('\n').filter(line => line.trim());
    
    // Parse CSV (assuming first line is headers)
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const data = lines.slice(1);

    let imported = 0;
    let skipped = 0;
    let errors = 0;

    for (const line of data) {
      try {
        const values = line.split(',');
        const row: any = {};
        
        headers.forEach((header, index) => {
          row[header] = values[index]?.trim() || '';
        });

        // Check if visitor exists
        let visitor = await prisma.visitor.findFirst({
          where: {
            userId: session.user.id,
            email: row.email || undefined,
            firstName: row.firstname,
            lastName: row.lastname,
          },
        });

        // Create visitor if doesn't exist
        if (!visitor) {
          visitor = await prisma.visitor.create({
            data: {
              firstName: row.firstname || row.first_name || '',
              lastName: row.lastname || row.last_name || '',
              email: row.email || undefined,
              phone: row.phone || undefined,
              company: row.company || undefined,
              userId: session.user.id,
            },
          });
        }

        // Create visitor log
        await prisma.visitorLog.create({
          data: {
            visitorId: visitor.id,
            purpose: row.purpose || 'Imported visit',
            checkInTime: row.checkintime ? new Date(row.checkintime) : new Date(),
            hostName: row.host || undefined,
            building: row.building || undefined,
            entryMethod: 'CSV',
            importSource: 'CSV',
            userId: session.user.id,
          },
        });

        imported++;
      } catch (error) {
        console.error('Error importing row:', error);
        errors++;
      }
    }

    return NextResponse.json({
      imported,
      skipped,
      errors,
    });
  } catch (error) {
    console.error('Import failed:', error);
    return NextResponse.json(
      { error: 'Import failed' },
      { status: 500 }
    );
  }
}
