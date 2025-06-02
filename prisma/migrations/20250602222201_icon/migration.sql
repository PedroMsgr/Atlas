-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "altText" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UnitConfig" ADD COLUMN     "iconUrl" TEXT;
