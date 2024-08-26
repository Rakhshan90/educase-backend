/*
  Warnings:

  - You are about to alter the column `longitude` on the `School` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `latitude` on the `School` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `School` MODIFY `longitude` DOUBLE NOT NULL,
    MODIFY `latitude` DOUBLE NOT NULL;
