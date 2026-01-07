-- CreateTable
CREATE TABLE "SecurityCamera" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "building" TEXT,
    "floor" TEXT,
    "cameraType" TEXT NOT NULL,
    "manufacturer" TEXT,
    "model" TEXT,
    "ipAddress" TEXT,
    "rtspUrl" TEXT,
    "hlsUrl" TEXT,
    "recordingUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ONLINE',
    "isRecording" BOOLEAN NOT NULL DEFAULT true,
    "hasPTZ" BOOLEAN NOT NULL DEFAULT false,
    "hasAudio" BOOLEAN NOT NULL DEFAULT false,
    "resolution" TEXT,
    "fps" INTEGER,
    "fieldOfView" TEXT,
    "coverageArea" TEXT,
    "lastOnline" DATETIME,
    "alertsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SecurityCamera_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccessControlSystem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "systemType" TEXT NOT NULL,
    "manufacturer" TEXT,
    "model" TEXT,
    "ipAddress" TEXT,
    "apiEndpoint" TEXT,
    "apiKey" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ONLINE',
    "lastSync" DATETIME,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AccessControlSystem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Door" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "building" TEXT,
    "floor" TEXT,
    "doorType" TEXT NOT NULL,
    "accessSystemId" TEXT,
    "cameraId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'CLOSED',
    "isLocked" BOOLEAN NOT NULL DEFAULT true,
    "requiresBadge" BOOLEAN NOT NULL DEFAULT true,
    "allowedRoles" JSONB,
    "emergencyUnlock" BOOLEAN NOT NULL DEFAULT false,
    "lastAccess" DATETIME,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Door_accessSystemId_fkey" FOREIGN KEY ("accessSystemId") REFERENCES "AccessControlSystem" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Door_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "SecurityCamera" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Door_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccessEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doorId" TEXT NOT NULL,
    "employeeId" TEXT,
    "visitorId" TEXT,
    "badgeNumber" TEXT,
    "eventType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cameraId" TEXT,
    "photoUrl" TEXT,
    "videoUrl" TEXT,
    "deniedReason" TEXT,
    "method" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AccessEvent_doorId_fkey" FOREIGN KEY ("doorId") REFERENCES "Door" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AccessEvent_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AccessEvent_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AccessEvent_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "SecurityCamera" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AccessEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DoorSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doorId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dayOfWeek" JSONB NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "allowedGroups" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DoorSchedule_doorId_fkey" FOREIGN KEY ("doorId") REFERENCES "Door" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DoorSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SecurityAlert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alertType" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "doorId" TEXT,
    "cameraId" TEXT,
    "employeeId" TEXT,
    "visitorId" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acknowledgedBy" TEXT,
    "acknowledgedAt" DATETIME,
    "resolvedBy" TEXT,
    "resolvedAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "photoUrl" TEXT,
    "videoUrl" TEXT,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SecurityAlert_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "SecurityCamera" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SecurityAlert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BadgeCredential" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeId" TEXT,
    "visitorId" TEXT,
    "badgeNumber" TEXT NOT NULL,
    "cardFormat" TEXT,
    "facilityCode" TEXT,
    "cardNumber" TEXT,
    "qrCode" TEXT,
    "mobileCredential" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "activatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expirationDate" DATETIME,
    "accessLevel" TEXT,
    "allowedDoors" JSONB,
    "allowedAreas" JSONB,
    "deactivatedBy" TEXT,
    "deactivatedAt" DATETIME,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BadgeCredential_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BadgeCredential_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BadgeCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "BadgeCredential_badgeNumber_key" ON "BadgeCredential"("badgeNumber");
