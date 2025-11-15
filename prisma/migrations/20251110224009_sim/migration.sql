-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `role_permission_id_permission_fkey`;

-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `role_permission_id_role_fkey`;

-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_permission_fkey`;

-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_id_role_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_id_user_fkey`;
