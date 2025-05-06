-- CreateEnum
CREATE TYPE "ClientStatus" AS ENUM ('new', 'reviewing', 'active', 'inactive', 'suspended');

-- CreateEnum
CREATE TYPE "SessionType" AS ENUM ('local', 'api');

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "status" "ClientStatus" NOT NULL DEFAULT 'new';

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "ip" TEXT,
ADD COLUMN     "lastUsedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "sessionType" "SessionType" NOT NULL DEFAULT 'local',
ADD COLUMN     "userAgent" TEXT;

-- CreateIndex
CREATE INDEX "Session_sessionType_idx" ON "Session"("sessionType");

-- CreateIndex
CREATE INDEX "Session_isActive_idx" ON "Session"("isActive");
