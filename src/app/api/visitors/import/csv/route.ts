import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';


export async function POST(request: NextRequest) {
  try {
    const session = await auth();
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
