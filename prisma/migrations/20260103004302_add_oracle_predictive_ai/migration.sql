-- CreateTable
CREATE TABLE "Prophecy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prophecyType" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "prediction" TEXT NOT NULL,
    "confidence" REAL NOT NULL,
    "targetEmployeeId" TEXT,
    "targetDepartment" TEXT,
    "targetShiftId" TEXT,
    "impactDate" DATETIME,
    "dataPoints" JSONB NOT NULL,
    "recommendations" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "acknowledgedBy" TEXT,
    "acknowledgedAt" DATETIME,
    "outcome" TEXT,
    "actualDate" DATETIME,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Prophecy_targetEmployeeId_fkey" FOREIGN KEY ("targetEmployeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Prophecy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RiskScore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeId" TEXT NOT NULL,
    "riskType" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "factors" JSONB NOT NULL,
    "trend" TEXT NOT NULL,
    "lastCalculated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "history" JSONB,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RiskScore_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RiskScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PredictiveInsight" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "insightType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "likelihood" REAL NOT NULL,
    "affectedCount" INTEGER,
    "costImpact" REAL,
    "timeframe" TEXT NOT NULL,
    "dataSource" JSONB NOT NULL,
    "actionRequired" BOOLEAN NOT NULL DEFAULT false,
    "suggestedActions" JSONB,
    "priority" INTEGER NOT NULL DEFAULT 50,
    "viewedBy" JSONB,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PredictiveInsight_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
