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
exports.RoleController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class RoleController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description } = request.body;
            const role = yield prismaClient_1.prismaClient.role.create({
                data: {
                    name,
                    description
                }
            });
            return response.json(role);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield prismaClient_1.prismaClient.role.findMany({});
                return response.json(role);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { name } = request.body;
            let role = yield prismaClient_1.prismaClient.role.findFirst({
                where: {
                    id: Number(id)
                }
            });
            if (!role) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            role = yield prismaClient_1.prismaClient.role.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name
                }
            });
            return response.json(role);
        });
    }
    deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const role = yield prismaClient_1.prismaClient.role.delete({
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
            const role = yield prismaClient_1.prismaClient.role.findFirst({
                where: {
                    id: Number(id)
                }
            });
            if (!role) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            return response.json(role);
        });
    }
}
exports.RoleController = RoleController;
//# sourceMappingURL=RoleController.js.map