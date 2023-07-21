/*
  Warnings:

  - Made the column `public` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `public` BOOLEAN NOT NULL;
