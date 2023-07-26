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
exports.UserRole = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class UserRole {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_role } = request.body;
            const userRole = yield prismaClient_1.prismaClient.userRole.create({
                data: {
                    user: { connect: { id: Number(id_user) } },
                    role: { connect: { id: Number(id_role) } },
                }
            });
            return response.json(userRole);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRole = yield prismaClient_1.prismaClient.userRole.findMany({});
                return response.json(userRole);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { id_role, id_user } = request.body;
            let userRole = yield prismaClient_1.prismaClient.userRole.findFirst({
                where: {
                    id: Number(id)
                }
            });
            if (!userRole) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            userRole = yield prismaClient_1.prismaClient.userRole.update({
                where: {
                    id: Number(id)
                },
                data: {
                    user: { connect: { id: Number(id_user) } },
                    role: { connect: { id: Number(id_role) } },
                }
            });
            return response.json(userRole);
        });
    }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userRole = yield prismaClient_1.prismaClient.userRole.delete({
                where: {
                    id: Number(id)
                },
            });
            response.json("registro excluído");
        });
    }
    pesquisar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userRole = yield prismaClient_1.prismaClient.userRole.findFirst({
                where: {
                    id: Number(id)
                },
            });
            if (!userRole) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            return response.json(userRole);
        });
    }
}
exports.UserRole = UserRole;
//# sourceMappingURL=UserRoleController.js.map