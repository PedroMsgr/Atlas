/*
  Warnings:

  - You are about to drop the column `content` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `mainImageId` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `sectionKey` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `externalLinks` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `footerLinks` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `headerLinks` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `iconUrl` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `infoSections` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `legalStepsCount` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `newsParams` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `ogImage` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `pageType` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `selectedNews` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `seoDescription` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `seoKeywords` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `seoTitle` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `UnitConfig` table. All the data in the column will be lost.
  - You are about to drop the `_ConfigArticles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `configId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pageDescription` to the `UnitConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicesDescription` to the `UnitConfig` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_mainImageId_fkey";

-- DropForeignKey
ALTER TABLE "_ConfigArticles" DROP CONSTRAINT "_ConfigArticles_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConfigArticles" DROP CONSTRAINT "_ConfigArticles_B_fkey";

-- DropIndex
DROP INDEX "Section_mainImageId_key";

-- DropIndex
DROP INDEX "UnitConfig_name_key";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "configId" TEXT NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "content",
DROP COLUMN "mainImageId",
DROP COLUMN "sectionKey",
DROP COLUMN "type",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "UnitConfig" DROP COLUMN "description",
DROP COLUMN "externalLinks",
DROP COLUMN "footerLinks",
DROP COLUMN "headerLinks",
DROP COLUMN "iconUrl",
DROP COLUMN "infoSections",
DROP COLUMN "legalStepsCount",
DROP COLUMN "newsParams",
DROP COLUMN "ogImage",
DROP COLUMN "pageType",
DROP COLUMN "selectedNews",
DROP COLUMN "seoDescription",
DROP COLUMN "seoKeywords",
DROP COLUMN "seoTitle",
DROP COLUMN "subtitle",
ADD COLUMN     "pageDescription" TEXT NOT NULL,
ADD COLUMN     "servicesDescription" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ConfigArticles";

-- CreateTable
CREATE TABLE "LegalStep" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "configId" TEXT NOT NULL,

    CONSTRAINT "LegalStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooterLink" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "configId" TEXT NOT NULL,

    CONSTRAINT "FooterLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LegalStep" ADD CONSTRAINT "LegalStep_configId_fkey" FOREIGN KEY ("configId") REFERENCES "UnitConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FooterLink" ADD CONSTRAINT "FooterLink_configId_fkey" FOREIGN KEY ("configId") REFERENCES "UnitConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_configId_fkey" FOREIGN KEY ("configId") REFERENCES "UnitConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
