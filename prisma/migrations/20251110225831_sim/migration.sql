-- DropIndex
DROP INDEX `role_permission_id_permission_fkey` ON `role_permission`;

-- DropIndex
DROP INDEX `role_permission_id_role_fkey` ON `role_permission`;

-- DropIndex
DROP INDEX `user_permission_id_permission_fkey` ON `user_permission`;

-- DropIndex
DROP INDEX `user_permission_id_user_fkey` ON `user_permission`;

-- DropIndex
DROP INDEX `user_role_id_role_fkey` ON `user_role`;

-- DropIndex
DROP INDEX `user_role_id_user_fkey` ON `user_role`;
