/*
  Warnings:

  - You are about to drop the column `serverId` on the `Section` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mainImageId]` on the table `Section` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_serverId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "sectionId" TEXT;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "sectionId" TEXT;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "serverId",
ADD COLUMN     "mainImageId" TEXT,
ADD COLUMN     "sectionKey" TEXT;

-- AlterTable
ALTER TABLE "UnitConfig" ADD COLUMN     "bannerUrl" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "footerLinks" JSONB,
ADD COLUMN     "headerLinks" JSONB,
ADD COLUMN     "iconUrl" TEXT,
ADD COLUMN     "ogImage" TEXT,
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoKeywords" TEXT,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "subtitle" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Section_mainImageId_key" ON "Section"("mainImageId");

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
