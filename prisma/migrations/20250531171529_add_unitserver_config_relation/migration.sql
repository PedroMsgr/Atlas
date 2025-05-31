-- AlterTable
ALTER TABLE "UnitServer" ADD COLUMN     "configId" TEXT;

-- AddForeignKey
ALTER TABLE "UnitServer" ADD CONSTRAINT "UnitServer_configId_fkey" FOREIGN KEY ("configId") REFERENCES "UnitConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;
