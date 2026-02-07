# Export/Import Capabilities - NyxTitan

## Overview
NyxTitan provides comprehensive data export and import capabilities to facilitate data migration, backup, and integration with external systems.

## Supported Formats

### Export Formats
- **CSV**: Universal format, works with Excel/Google Sheets
- **Excel (XLSX)**: Rich formatting, multiple sheets
- **JSON**: API integrations, data backup
- **PDF**: Reports and printable documents

### Import Formats
- **CSV**: Bulk employee data, schedules
- **Excel (XLSX)**: Complex data with validation
- **JSON**: Full data migration, API imports

## Export Features

### 1. Employee Data Export

#### CSV Export
```typescript
// /api/employees/export
GET /api/employees/export?format=csv

Response: CSV file download
Headers:
  Content-Type: text/csv
  Content-Disposition: attachment; filename="employees-2026-02-07.csv"

CSV Format:
firstName,lastName,email,phone,position,hourlyRate,hireDate
John,Doe,john@example.com,(555)123-4567,Nurse,35.50,2025-01-15
```

#### Excel Export
```typescript
// /api/employees/export
GET /api/employees/export?format=excel

Features:
- Multiple sheets (Employees, Schedules, Time-off)
- Formatted headers
- Data validation
- Freeze panes
```

### 2. Schedule Export

```typescript
// /api/schedules/export
GET /api/schedules/export?from=2026-02-01&to=2026-02-28&format=csv

CSV Format:
date,employeeName,shiftStart,shiftEnd,position,location
2026-02-01,John Doe,07:00,15:00,Nurse,ICU
```

### 3. Time-Off Export

```typescript
// /api/time-off/export
GET /api/time-off/export?year=2026&format=excel

Includes:
- Employee name
- Request date
- Start/end dates
- Days requested
- Status (Approved/Denied/Pending)
- Reason
```

### 4. Payroll Export

```typescript
// /api/payroll/export
GET /api/payroll/export?period=2026-02&format=csv

CSV Format:
employeeName,regularHours,overtimeHours,totalPay,deductions,netPay
John Doe,160,8,5820.00,1164.00,4656.00
```

### 5. Report Export

```typescript
// /api/reports/:id/export
GET /api/reports/clx123.../export?format=pdf

Formats: PDF, CSV, Excel
```

## Import Features

### 1. Employee Bulk Import

#### CSV Template
```csv
firstName,lastName,email,phone,position,hourlyRate,hireDate
Jane,Smith,jane@example.com,(555)234-5678,RN,38.00,2026-02-01
```

#### API Endpoint
```typescript
POST /api/employees/import
Content-Type: multipart/form-data

Body:
  file: employees.csv
  options: {
    skipDuplicates: true,
    updateExisting: false,
    validateEmails: true
  }

Response:
{
  success: true,
  imported: 45,
  skipped: 2,
  errors: [
    { row: 3, error: "Invalid email format" }
  ]
}
```

### 2. Schedule Import

```typescript
POST /api/schedules/import
Content-Type: multipart/form-data

CSV Template:
date,employeeEmail,startTime,endTime,position
2026-02-15,john@example.com,07:00,15:00,Nurse

Features:
- Conflict detection
- Employee matching by email or ID
- Validation of time overlaps
```

### 3. Time-Off Import

```typescript
POST /api/time-off/import

CSV Template:
employeeEmail,startDate,endDate,type,reason
john@example.com,2026-03-01,2026-03-05,PTO,Vacation

Validation:
- Employee exists
- No schedule conflicts
- Valid date ranges
- Balance checking
```

## Implementation

### Dependencies
```json
{
  "exceljs": "^4.4.0",
  "papaparse": "^5.5.3",
  "jspdf": "^2.5.1",
  "jspdf-autotable": "^3.8.2"
}
```

### Export Implementation Example

```typescript
// /src/lib/export.ts
import ExcelJS from 'exceljs';
import Papa from 'papaparse';

export async function exportToCSV(data: any[], filename: string) {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  downloadBlob(blob, `${filename}.csv`);
}

export async function exportToExcel(data: any[], filename: string) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');
  
  // Add headers
  const headers = Object.keys(data[0]);
  worksheet.addRow(headers);
  
  // Add data
  data.forEach(row => {
    worksheet.addRow(Object.values(row));
  });
  
  // Style headers
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF4F46E5' }
  };
  
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { 
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  });
  downloadBlob(blob, `${filename}.xlsx`);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
```

### Import Implementation Example

```typescript
// /src/lib/import.ts
import Papa from 'papaparse';

export async function importFromCSV(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

export function validateEmployeeData(data: any[]): {
  valid: any[];
  errors: { row: number; error: string }[];
} {
  const valid = [];
  const errors = [];
  
  data.forEach((row, index) => {
    const rowNumber = index + 2; // +2 for header and 0-index
    
    if (!row.email || !isValidEmail(row.email)) {
      errors.push({ row: rowNumber, error: 'Invalid email' });
      return;
    }
    
    if (!row.firstName || !row.lastName) {
      errors.push({ row: rowNumber, error: 'Name required' });
      return;
    }
    
    valid.push(row);
  });
  
  return { valid, errors };
}
```

## API Endpoints to Create

### Export Endpoints
```
GET /api/employees/export?format=csv|excel|json
GET /api/schedules/export?from=DATE&to=DATE&format=csv|excel
GET /api/time-off/export?year=YYYY&format=csv|excel
GET /api/payroll/export?period=YYYY-MM&format=csv|excel
GET /api/reports/:id/export?format=pdf|csv|excel
```

### Import Endpoints
```
POST /api/employees/import
POST /api/schedules/import
POST /api/time-off/import
POST /api/templates/import
```

### Template Download Endpoints
```
GET /api/templates/employees.csv
GET /api/templates/schedules.csv
GET /api/templates/time-off.csv
```

## UI Components

### Export Button Component
```tsx
// /src/components/ExportButton.tsx
export function ExportButton({ 
  data, 
  filename, 
  formats = ['csv', 'excel', 'pdf'] 
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <FileDown className="w-4 h-4" />
          Export
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {formats.includes('csv') && (
          <DropdownMenuItem onClick={() => exportToCSV(data, filename)}>
            Export as CSV
          </DropdownMenuItem>
        )}
        {formats.includes('excel') && (
          <DropdownMenuItem onClick={() => exportToExcel(data, filename)}>
            Export as Excel
          </DropdownMenuItem>
        )}
        {formats.includes('pdf') && (
          <DropdownMenuItem onClick={() => exportToPDF(data, filename)}>
            Export as PDF
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Import Dialog Component
```tsx
// /src/components/ImportDialog.tsx
export function ImportDialog({ onImport }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const handleImport = async () => {
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/employees/import', {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    onImport(result);
    setUploading(false);
  };
  
  return (
    <Dialog>
      {/* Dialog UI */}
    </Dialog>
  );
}
```

## Security Considerations

### Export Security
- ✅ Require authentication
- ✅ Role-based access (admins/managers only)
- ✅ Audit logging
- ✅ Rate limiting (prevent bulk data extraction)
- ✅ Watermarking (for PDFs)

### Import Security
- ✅ File type validation
- ✅ File size limits (max 10MB)
- ✅ Virus scanning (if available)
- ✅ Data validation before insert
- ✅ Transaction rollback on errors
- ✅ Audit logging

## Testing

### Export Tests
```typescript
describe('Employee Export', () => {
  it('exports to CSV format', async () => {
    const response = await fetch('/api/employees/export?format=csv');
    expect(response.headers.get('content-type')).toBe('text/csv');
  });
  
  it('exports to Excel format', async () => {
    const response = await fetch('/api/employees/export?format=excel');
    expect(response.headers.get('content-type')).toContain('spreadsheet');
  });
});
```

### Import Tests
```typescript
describe('Employee Import', () => {
  it('imports valid CSV data', async () => {
    const file = new File([csvData], 'employees.csv', { type: 'text/csv' });
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/employees/import', {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    expect(result.imported).toBeGreaterThan(0);
  });
});
```

## Implementation Status

### ✅ Completed
- [x] ExcelJS and PapaParse dependencies installed
- [x] Export/import documentation created

### 🚧 In Progress
- [ ] CSV export utilities
- [ ] Excel export utilities
- [ ] PDF export for reports

### 📋 To Do
- [ ] Employee export API endpoint
- [ ] Schedule export API endpoint
- [ ] Employee import API endpoint
- [ ] Import validation logic
- [ ] UI components (ExportButton, ImportDialog)
- [ ] Template downloads
- [ ] Security implementation
- [ ] Testing

## Usage Examples

### For Developers
```typescript
// Export employees to CSV
const employees = await prisma.employee.findMany();
await exportToCSV(employees, 'employees-2026-02-07');

// Import employees from CSV
const file = document.getElementById('fileInput').files[0];
const data = await importFromCSV(file);
const { valid, errors } = validateEmployeeData(data);
```

### For Users
1. Navigate to Employees page
2. Click "Export" button
3. Select format (CSV/Excel/PDF)
4. File downloads automatically

---

**Last Updated**: February 7, 2026
**Status**: Export/Import capabilities documented and ready for implementation
