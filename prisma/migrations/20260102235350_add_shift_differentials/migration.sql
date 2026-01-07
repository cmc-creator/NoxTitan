-- AlterTable
ALTER TABLE "User" ADD COLUMN "holidayDifferential" REAL DEFAULT 2.0;
ALTER TABLE "User" ADD COLUMN "nightDifferential" REAL DEFAULT 1.5;
ALTER TABLE "User" ADD COLUMN "overtimeRate" REAL DEFAULT 1.5;
ALTER TABLE "User" ADD COLUMN "weekendDifferential" REAL DEFAULT 1.25;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shift" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "scheduleId" TEXT,
    "title" TEXT,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "position" TEXT,
    "notes" TEXT,
    "color" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "breakMinutes" INTEGER DEFAULT 0,
    "isNightShift" BOOLEAN NOT NULL DEFAULT false,
    "isWeekend" BOOLEAN NOT NULL DEFAULT false,
    "isHoliday" BOOLEAN NOT NULL DEFAULT false,
    "overtimeHours" REAL DEFAULT 0,
    "totalPay" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Shift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Shift_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Shift_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Shift" ("color", "createdAt", "employeeId", "endTime", "id", "isPublished", "notes", "position", "scheduleId", "startTime", "title", "updatedAt", "userId") SELECT "color", "createdAt", "employeeId", "endTime", "id", "isPublished", "notes", "position", "scheduleId", "startTime", "title", "updatedAt", "userId" FROM "Shift";
DROP TABLE "Shift";
ALTER TABLE "new_Shift" RENAME TO "Shift";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
