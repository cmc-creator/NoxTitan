import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import * as Papa from 'papaparse';
import ExcelJS from 'exceljs';

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

// Helper function to parse Excel using ExcelJS
async function parseExcel(buffer: ArrayBuffer): Promise<any[]> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  
  const worksheet = workbook.worksheets[0];
  if (!worksheet) {
    throw new Error('No worksheet found in Excel file');
  }

  const data: any[] = [];
  const headers: string[] = [];
  
  // Get headers from first row (include empty cells to maintain alignment)
  const firstRow = worksheet.getRow(1);
  firstRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    headers[colNumber - 1] = cell.value?.toString() || '';
  });
  
  // Process data rows
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // Skip header row
    
    const rowData: any = {};
    let hasData = false;
    
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      const header = headers[colNumber - 1];
      if (header) {
        const value = cell.value;
        rowData[header] = value;
        // Check if row has any meaningful data (not null/undefined)
        if (value !== null && value !== undefined) {
          hasData = true;
        }
      }
    });
    
    // Only add rows that contain at least one non-null/non-undefined value
    if (hasData) {
      data.push(rowData);
    }
  });
  
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
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
      data = await parseExcel(buffer);
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
