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
exports.SessionController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaClient_1 = require("../databases/prismaClient");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class SessionController {
    login(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const User = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    email: email
                },
                include: {
                    UserPermission: {
                        select: {
                            id_permission: true
                        }
                    },
                    UserRole: {
                        select: {
                            id_role: true
                        }
                    }
                }
            });
            console.log(User);
            if (!User) {
                return response.json({
                    fail: true,
                    error: "E-mail ou senha inválidas"
                });
            }
            const verifyPass = yield bcrypt_1.default.compare(password, User.password);
            if (!verifyPass) {
                return response.json({
                    fail: true,
                    error: "E-mail ou senha inválidas"
                });
            }
            const token = jsonwebtoken_1.default.sign({
                id: User.id,
                permissions: User.UserPermission.map(item => item.id_permission),
                roles: User.UserRole.map(item => item.id_role) //vai passar como parâmetro roles que vai ser atribuida pelo id_role que está dentro da tabela UserRole
            }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "", { expiresIn: '1d' }); //payload, key
            //payload: a variável que inteliga ao seu token
            return response.json({
                User: User,
                token: token
            });
        });
    }
}
exports.SessionController = SessionController;
//# sourceMappingURL=SessionController.js.map