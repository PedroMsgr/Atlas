-- CreateTable
CREATE TABLE "UpdateLog" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "configId" TEXT NOT NULL,
    "previousConfigId" TEXT,
    "status" TEXT NOT NULL,
    "initiatorId" TEXT NOT NULL,
    "description" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "errorDetails" TEXT,

    CONSTRAINT "UpdateLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "relatedEntityId" TEXT,
    "relatedEntityType" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serverId" TEXT,

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserNotification_userId_idx" ON "UserNotification"("userId");

-- CreateIndex
CREATE INDEX "UserNotification_isRead_idx" ON "UserNotification"("isRead");

-- CreateIndex
CREATE INDEX "UserNotification_serverId_idx" ON "UserNotification"("serverId");

-- AddForeignKey
ALTER TABLE "UpdateLog" ADD CONSTRAINT "UpdateLog_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "UnitServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateLog" ADD CONSTRAINT "UpdateLog_configId_fkey" FOREIGN KEY ("configId") REFERENCES "UnitConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateLog" ADD CONSTRAINT "UpdateLog_previousConfigId_fkey" FOREIGN KEY ("previousConfigId") REFERENCES "UnitConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateLog" ADD CONSTRAINT "UpdateLog_initiatorId_fkey" FOREIGN KEY ("initiatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "UnitServer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
