-- CreateTable
CREATE TABLE "MerchStore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "storeUrl" TEXT,
    "apiKey" TEXT,
    "apiSecret" TEXT,
    "webhookSecret" TEXT,
    "webhookUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "syncEnabled" BOOLEAN NOT NULL DEFAULT true,
    "lastSyncAt" DATETIME,
    "settings" JSONB,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "storeId" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "sku" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "price" REAL NOT NULL,
    "imageUrl" TEXT,
    "images" JSONB,
    "variants" JSONB,
    "stockQuantity" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "tags" JSONB,
    "redeemableWithXP" BOOLEAN NOT NULL DEFAULT false,
    "xpCost" INTEGER,
    "metadata" JSONB,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchItem_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "MerchStore" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MerchItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "storeId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "externalOrderId" TEXT,
    "paymentMethod" TEXT NOT NULL,
    "totalAmount" REAL NOT NULL,
    "xpSpent" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "shippingAddress" JSONB,
    "trackingNumber" TEXT,
    "trackingUrl" TEXT,
    "notes" TEXT,
    "payrollDeductionId" TEXT,
    "fulfilledAt" DATETIME,
    "cancelledAt" DATETIME,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchOrder_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "MerchStore" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MerchOrder_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MerchOrder_payrollDeductionId_fkey" FOREIGN KEY ("payrollDeductionId") REFERENCES "PayrollDeduction" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MerchOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchOrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" REAL NOT NULL,
    "variantInfo" JSONB,
    "subtotal" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MerchOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "MerchOrder" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MerchOrderItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "MerchItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "MerchItem_storeId_externalId_key" ON "MerchItem"("storeId", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "MerchOrder_orderNumber_key" ON "MerchOrder"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MerchOrder_payrollDeductionId_key" ON "MerchOrder"("payrollDeductionId");
