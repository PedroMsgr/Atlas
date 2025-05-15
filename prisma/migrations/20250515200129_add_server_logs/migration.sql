-- CreateTable
CREATE TABLE "ServerLog" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "ServerLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ServerLog_serverId_idx" ON "ServerLog"("serverId");

-- CreateIndex
CREATE INDEX "ServerLog_timestamp_idx" ON "ServerLog"("timestamp");

-- AddForeignKey
ALTER TABLE "ServerLog" ADD CONSTRAINT "ServerLog_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "UnitServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
