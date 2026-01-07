-- CreateTable
CREATE TABLE "TimeClockEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "shiftId" TEXT,
    "clockIn" DATETIME NOT NULL,
    "clockOut" DATETIME,
    "clockInLat" REAL,
    "clockInLng" REAL,
    "clockOutLat" REAL,
    "clockOutLng" REAL,
    "isWithinGeofence" BOOLEAN NOT NULL DEFAULT true,
    "deviceType" TEXT,
    "deviceId" TEXT,
    "deviceBrand" TEXT,
    "ipAddress" TEXT,
    "photoClockIn" TEXT,
    "photoClockOut" TEXT,
    "biometricId" TEXT,
    "badgeNumber" TEXT,
    "totalHours" REAL,
    "isLate" BOOLEAN NOT NULL DEFAULT false,
    "lateMinutes" INTEGER DEFAULT 0,
    "isEarlyOut" BOOLEAN NOT NULL DEFAULT false,
    "earlyMinutes" INTEGER DEFAULT 0,
    "missedMealBreak" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'CLOCKED_IN',
    "notes" TEXT,
    "editedBy" TEXT,
    "editReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TimeClockEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TimeClockEntry_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TimeClockEntry_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BreakEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timeClockEntryId" TEXT NOT NULL,
    "breakType" TEXT NOT NULL DEFAULT 'REST',
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME,
    "duration" INTEGER,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BreakEntry_timeClockEntryId_fkey" FOREIGN KEY ("timeClockEntryId") REFERENCES "TimeClockEntry" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TimeClockDevice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT,
    "serialNumber" TEXT,
    "macAddress" TEXT,
    "ipAddress" TEXT,
    "location" TEXT,
    "apiKey" TEXT,
    "apiSecret" TEXT,
    "webhookUrl" TEXT,
    "syncEnabled" BOOLEAN NOT NULL DEFAULT true,
    "lastSync" DATETIME,
    "latitude" REAL,
    "longitude" REAL,
    "geofenceRadius" REAL,
    "requirePhoto" BOOLEAN NOT NULL DEFAULT false,
    "requireBiometric" BOOLEAN NOT NULL DEFAULT false,
    "allowEarlyClockIn" INTEGER DEFAULT 15,
    "allowLateClockIn" INTEGER DEFAULT 5,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TimeClockDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PRESENT',
    "hoursWorked" REAL,
    "isLate" BOOLEAN NOT NULL DEFAULT false,
    "lateMinutes" INTEGER,
    "leftEarly" BOOLEAN NOT NULL DEFAULT false,
    "earlyMinutes" INTEGER,
    "notes" TEXT,
    "approvedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AttendanceRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AttendanceRecord_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplianceRule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ruleType" TEXT NOT NULL,
    "triggerHours" REAL,
    "maxConsecutiveHours" REAL,
    "minBreakMinutes" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ComplianceRule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplianceViolation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "timeClockEntryId" TEXT,
    "violationDate" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'MEDIUM',
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "resolvedBy" TEXT,
    "resolvedAt" DATETIME,
    "resolution" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ComplianceViolation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ComplianceViolation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ComplianceViolation_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "ComplianceRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ComplianceViolation_timeClockEntryId_fkey" FOREIGN KEY ("timeClockEntryId") REFERENCES "TimeClockEntry" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
