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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prismaClient_1 = require("../databases/prismaClient");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    criar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password, email, company } = request.body;
            const User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });
            if (User) {
                return response.json({
                    error: "Esta conta já foi criada"
                });
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            const user = yield prismaClient_1.prismaClient.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword,
                    company,
                    ["public"]: false
                }
            });
            return response.json(user);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const User = yield prismaClient_1.prismaClient.user.findMany({
                    include: {
                        UserPermission: {},
                        UserRole: {},
                    },
                });
                return response.json(User);
            }
            catch (error) {
                return response.json(error);
            }
        });
    }
    atualizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { name, password, email, company, public: isPublic } = request.body;
            let User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(id)
                }
            });
            if (!User) {
                return response.json({
                    error: "não existe o produto"
                });
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            User = yield prismaClient_1.prismaClient.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name,
                    email,
                    password: hashPassword,
                    company,
                    ['public']: isPublic
                }
            });
            return response.json(User);
        });
    }
    /*
        async deletar(request:Request, response:Response){
            const {id}=request.params
            const User = await prismaClient.user.delete({
                where: {
                   id:Number(id)
                },
              })
            response.json("registro excluído")
        }
    */
    pesquisar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id: Number(id)
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
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map