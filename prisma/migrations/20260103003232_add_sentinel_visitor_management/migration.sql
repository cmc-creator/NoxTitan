-- CreateTable
CREATE TABLE "Visitor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "company" TEXT,
    "photoUrl" TEXT,
    "idNumber" TEXT,
    "idType" TEXT,
    "vehiclePlate" TEXT,
    "notes" TEXT,
    "isWatchlist" BOOLEAN NOT NULL DEFAULT false,
    "watchlistReason" TEXT,
    "isVIP" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Visitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisitorLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visitorId" TEXT NOT NULL,
    "hostEmployeeId" TEXT,
    "hostName" TEXT,
    "purpose" TEXT NOT NULL,
    "checkInTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkOutTime" DATETIME,
    "expectedDuration" INTEGER,
    "actualDuration" INTEGER,
    "building" TEXT,
    "location" TEXT,
    "badgeNumber" TEXT,
    "entryMethod" TEXT NOT NULL DEFAULT 'MANUAL',
    "temperature" REAL,
    "healthScreenPassed" BOOLEAN NOT NULL DEFAULT true,
    "ndaSigned" BOOLEAN NOT NULL DEFAULT false,
    "ndaSignature" TEXT,
    "photoTaken" BOOLEAN NOT NULL DEFAULT false,
    "photoUrl" TEXT,
    "accessAreas" JSONB,
    "devicesSurrendered" JSONB,
    "emergencyContact" TEXT,
    "emergencyPhone" TEXT,
    "status" TEXT NOT NULL DEFAULT 'CHECKED_IN',
    "hostNotified" BOOLEAN NOT NULL DEFAULT false,
    "hostNotifiedAt" DATETIME,
    "importSource" TEXT,
    "importId" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VisitorLog_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VisitorLog_hostEmployeeId_fkey" FOREIGN KEY ("hostEmployeeId") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "VisitorLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisitorBadge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visitorId" TEXT NOT NULL,
    "badgeNumber" TEXT NOT NULL,
    "qrCode" TEXT,
    "issuedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "badgeType" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VisitorBadge_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VisitorBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisitorWatchlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "idNumber" TEXT,
    "reason" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "addedBy" TEXT NOT NULL,
    "expiresAt" DATETIME,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VisitorWatchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VisitorBadge_badgeNumber_key" ON "VisitorBadge"("badgeNumber");
