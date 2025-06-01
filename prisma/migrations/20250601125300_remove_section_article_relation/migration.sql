/*
  Warnings:

  - You are about to drop the column `sectionId` on the `Article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_sectionId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "sectionId";
