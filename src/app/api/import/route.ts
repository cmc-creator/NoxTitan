import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import * as Papa from 'papaparse';
import * as XLSX from 'xlsx';

// Helper function to parse CSV
function parseCSV(text: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error: Error) => reject(error),
    });
  });
}

// Helper function to parse Excel
function parseExcel(buffer: ArrayBuffer): any[] {
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(firstSheet);
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const dataType = formData.get('dataType') as string;
    const fieldMapping = JSON.parse(formData.get('fieldMapping') as string || '{}');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Parse file based on type
    let data: any[];
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith('.csv')) {
      const text = await file.text();
      data = await parseCSV(text);
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      const buffer = await file.arrayBuffer();
      data = parseExcel(buffer);
    } else {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }

    // Process data based on type
    let imported = 0;
    let errors = 0;

    if (dataType === 'employees') {
      for (const row of data) {
        try {
          const employeeData = {
            userId: session.user.id,
            firstName: row[fieldMapping.firstName] || row.firstName || '',
            lastName: row[fieldMapping.lastName] || row.lastName || '',
            email: row[fieldMapping.email] || row.email || '',
            phone: row[fieldMapping.phone] || row.phone || null,
            position: row[fieldMapping.position] || row.position || null,
            hourlyRate: parseFloat(row[fieldMapping.hourlyRate] || row.hourlyRate) || null,
          };

          if (employeeData.firstName && employeeData.lastName && employeeData.email) {
            await prisma.employee.create({ data: employeeData });
            imported++;
          } else {
            errors++;
          }
        } catch (error) {
          console.error('Error importing employee row:', error);
          errors++;
        }
      }
    } else if (dataType === 'schedule-history') {
      for (const row of data) {
        try {
          const startTime = new Date(row[fieldMapping.startTime] || row.startTime);
          const endTime = new Date(row[fieldMapping.endTime] || row.endTime);
          const employeeEmail = row[fieldMapping.employeeEmail] || row.employeeEmail;

          // Find employee by email
          const employee = await prisma.employee.findFirst({
            where: { email: employeeEmail, userId: session.user.id },
          });

          if (employee && !isNaN(startTime.getTime()) && !isNaN(endTime.getTime())) {
            await prisma.shift.create({
              data: {
                userId: session.user.id,
                employeeId: employee.id,
                startTime,
                endTime,
                title: row[fieldMapping.title] || row.title || null,
                position: row[fieldMapping.position] || row.position || null,
                notes: row[fieldMapping.notes] || row.notes || null,
              },
            });
            imported++;
          } else {
            errors++;
          }
        } catch (error) {
          console.error('Error importing shift row:', error);
          errors++;
        }
      }
    } else if (dataType === 'time-off') {
      for (const row of data) {
        try {
          const startDate = new Date(row[fieldMapping.startDate] || row.startDate);
          const endDate = new Date(row[fieldMapping.endDate] || row.endDate);
          const employeeEmail = row[fieldMapping.employeeEmail] || row.employeeEmail;

          const employee = await prisma.employee.findFirst({
            where: { email: employeeEmail, userId: session.user.id },
          });

          if (employee && !isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
            await prisma.timeOffRequest.create({
              data: {
                userId: session.user.id,
                employeeId: employee.id,
                startDate,
                endDate,
                reason: row[fieldMapping.reason] || row.reason || null,
                status: 'PENDING',
              },
            });
            imported++;
          } else {
            errors++;
          }
        } catch (error) {
          console.error('Error importing time-off row:', error);
          errors++;
        }
      }
    }

    return NextResponse.json({
      success: true,
      imported,
      errors,
      message: `Successfully imported ${imported} records. ${errors} errors.`,
    });
  } catch (error) {
    console.error('Import error:', error);
    return NextResponse.json(
      { error: 'Failed to process import' },
      { status: 500 }
    );
  }
}
