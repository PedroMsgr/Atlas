/*
  Warnings:

  - You are about to drop the column `activeConfigId` on the `UnitServer` table. All the data in the column will be lost.
  - You are about to drop the `AutoSource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ManualArticle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UpdateLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AutoSource" DROP CONSTRAINT "AutoSource_configId_fkey";

-- DropForeignKey
ALTER TABLE "AutoSource" DROP CONSTRAINT "AutoSource_serverId_fkey";

-- DropForeignKey
ALTER TABLE "ManualArticle" DROP CONSTRAINT "ManualArticle_configId_fkey";

-- DropForeignKey
ALTER TABLE "ManualArticle" DROP CONSTRAINT "ManualArticle_serverId_fkey";

-- DropForeignKey
ALTER TABLE "UnitServer" DROP CONSTRAINT "UnitServer_activeConfigId_fkey";

-- DropForeignKey
ALTER TABLE "UpdateLog" DROP CONSTRAINT "UpdateLog_configId_fkey";

-- DropForeignKey
ALTER TABLE "UpdateLog" DROP CONSTRAINT "UpdateLog_initiatorId_fkey";

-- DropForeignKey
ALTER TABLE "UpdateLog" DROP CONSTRAINT "UpdateLog_previousConfigId_fkey";

-- DropForeignKey
ALTER TABLE "UpdateLog" DROP CONSTRAINT "UpdateLog_serverId_fkey";

-- AlterTable
ALTER TABLE "UnitConfig" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "UnitServer" DROP COLUMN "activeConfigId",
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "AutoSource";

-- DropTable
DROP TABLE "ManualArticle";

-- DropTable
DROP TABLE "UpdateLog";

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConfigArticles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ConfigArticles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ConfigArticles_B_index" ON "_ConfigArticles"("B");

-- AddForeignKey
ALTER TABLE "_ConfigArticles" ADD CONSTRAINT "_ConfigArticles_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConfigArticles" ADD CONSTRAINT "_ConfigArticles_B_fkey" FOREIGN KEY ("B") REFERENCES "UnitConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
