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
exports.PerfilController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
class PerfilController {
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(request.user.id)
                } /*,
                include:{
                    UserCategory:true,
                }*/
            });
            if (!User) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            return response.json(User);
        });
    }
    viewpu(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield prismaClient_1.prismaClient.user.findMany({
                where: {
                    public: true,
                } /*,
                include:{
                    UserCategory:true,
                }*/
            });
            if (!User || User.length === 0) {
                return response.json({
                    error: "Não existem usuários públicos."
                });
            }
            return response.json(User);
        });
    }
    publicar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { public: isPublic } = request.body;
            let User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(request.user.id)
                } /*,
                include:{
                    UserCategory:true,
                }*/
            });
            if (!User) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            User = yield prismaClient_1.prismaClient.user.update({
                where: {
                    id: Number(request.user.id)
                },
                data: {
                    ['public']: isPublic
                }
            });
            console.log('aparentemente certo');
            return response.json(User);
        });
    }
}
exports.PerfilController = PerfilController;
//# sourceMappingURL=PerfilController.js.map