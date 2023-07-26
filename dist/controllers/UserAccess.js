"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccess = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class UserAccess {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_role, id_permission } = request.body;
            const userRole = yield prismaClient_1.prismaClient.userRole.create({
                data: {
                    user: { connect: { id: Number(id_user) } },
                    role: { connect: { id: Number(id_role) } },
                }
            });
            const userPermission = yield prismaClient_1.prismaClient.userPermission.create({
                data: {
                    user: { connect: { id: Number(id_user) } },
                    permission: { connect: { id: Number(id_permission) } }
                }
            });
            if (userPermission instanceof Error) {
                return response.status(400).json(userPermission.message);
            }
            if (userRole instanceof Error) {
                return response.status(400).json(userRole.message);
            }
            const userACL = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(id_user)
                },
                include: {
                    UserPermission: true,
                    UserRole: true
                },
            });
            return response.json(userACL);
            // const results = await prismaClient.rolePermission.create({
            //     user: { connect: { id:Number(id_user) } },
            //     permissions:{connect:{id:Number(id_permission)}},
            // });
        });
    }
}
exports.UserAccess = UserAccess;
//# sourceMappingURL=UserAccess.js.map