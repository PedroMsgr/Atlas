-- CreateTable
CREATE TABLE "ApiSession" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ApiSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiSession_token_key" ON "ApiSession"("token");

-- CreateIndex
CREATE INDEX "ApiSession_token_idx" ON "ApiSession"("token");

-- CreateIndex
CREATE INDEX "ApiSession_userId_idx" ON "ApiSession"("userId");

-- CreateIndex
CREATE INDEX "ApiSession_serverId_idx" ON "ApiSession"("serverId");

-- AddForeignKey
ALTER TABLE "ApiSession" ADD CONSTRAINT "ApiSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiSession" ADD CONSTRAINT "ApiSession_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "UnitServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
