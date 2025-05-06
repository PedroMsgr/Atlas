/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_serverId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "UnitConfig" ALTER COLUMN "footerInfo" DROP NOT NULL,
ALTER COLUMN "legalStepsCount" SET DEFAULT 0,
ALTER COLUMN "externalLinks" DROP NOT NULL,
ALTER COLUMN "newsParams" DROP NOT NULL,
ALTER COLUMN "selectedNews" DROP NOT NULL,
ALTER COLUMN "infoSections" DROP NOT NULL;

-- DropTable
DROP TABLE "Session";
