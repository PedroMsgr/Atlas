-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
