-- CreateTable
CREATE TABLE "PayrollDeduction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeId" TEXT NOT NULL,
    "assetId" TEXT,
    "assignmentId" TEXT,
    "deductionType" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "scheduledDate" DATETIME NOT NULL,
    "appliedDate" DATETIME,
    "approvedBy" TEXT,
    "approvedDate" DATETIME,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PayrollDeduction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PayrollDeduction_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PayrollDeduction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssetAssignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "checkOutDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkOutBy" TEXT NOT NULL,
    "checkInDate" DATETIME,
    "checkInBy" TEXT,
    "expectedReturnDate" DATETIME,
    "returnCondition" TEXT,
    "notes" TEXT,
    "digitalSignature" TEXT,
    "employeeAcknowledgment" BOOLEAN NOT NULL DEFAULT false,
    "acknowledgedValue" REAL,
    "signedAt" DATETIME,
    "signatureIp" TEXT,
    "isOverdue" BOOLEAN NOT NULL DEFAULT false,
    "overdueDate" DATETIME,
    "payrollFlagged" BOOLEAN NOT NULL DEFAULT false,
    "payrollFlaggedDate" DATETIME,
    "deductionAmount" REAL,
    "deductionApplied" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AssetAssignment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AssetAssignment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AssetAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AssetAssignment" ("assetId", "checkInBy", "checkInDate", "checkOutBy", "checkOutDate", "createdAt", "employeeId", "expectedReturnDate", "id", "notes", "returnCondition", "updatedAt", "userId") SELECT "assetId", "checkInBy", "checkInDate", "checkOutBy", "checkOutDate", "createdAt", "employeeId", "expectedReturnDate", "id", "notes", "returnCondition", "updatedAt", "userId" FROM "AssetAssignment";
DROP TABLE "AssetAssignment";
ALTER TABLE "new_AssetAssignment" RENAME TO "AssetAssignment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
