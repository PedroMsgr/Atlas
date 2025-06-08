/*
  Warnings:

  - The values [newsConfig] on the enum `SectionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `serverId` on the `Professional` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SectionType_new" AS ENUM ('text', 'legalGuide', 'manual');
ALTER TYPE "SectionType" RENAME TO "SectionType_old";
ALTER TYPE "SectionType_new" RENAME TO "SectionType";
DROP TYPE "SectionType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_serverId_fkey";

-- AlterTable
ALTER TABLE "Professional" DROP COLUMN "serverId";

-- DropEnum
DROP TYPE "SessionType";
