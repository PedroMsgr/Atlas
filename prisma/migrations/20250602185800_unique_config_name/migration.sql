/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `UnitConfig` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UnitConfig_name_key" ON "UnitConfig"("name");
