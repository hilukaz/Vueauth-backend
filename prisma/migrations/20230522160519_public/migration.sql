-- AlterTable
ALTER TABLE `users` ADD COLUMN `public` BOOLEAN NULL,
    MODIFY `company` VARCHAR(191) NULL;
