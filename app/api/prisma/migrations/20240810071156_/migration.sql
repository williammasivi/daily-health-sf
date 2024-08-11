/*
  Warnings:

  - You are about to drop the column `horaire_description` on the `horaire` table. All the data in the column will be lost.
  - You are about to drop the column `repetition_jour` on the `horaire` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "horaire" DROP COLUMN "horaire_description",
DROP COLUMN "repetition_jour";
