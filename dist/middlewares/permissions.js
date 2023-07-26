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
exports.is = exports.can = void 0;
function can(permissionRoutes) {
    return (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        const existPermissions = permissionRoutes.every(//pega uma variável (array) que antecede o método e aplica uma função de condinção para cada valor do array, retorna bolean
        //o item se torna um valor do array 
        //pega uma variável (array) que antecede o método e aplica uma função de condinção para cada valor do array, retorna bolean
        item => { var _a; return (_a = request.user.permissions) === null || _a === void 0 ? void 0 : _a.includes(item); } //pega a permission e verifica se ela está incluida no array 
        ); // essa const inteira tem o objetivo de comparar array com outro array
        if (!existPermissions) {
            return (response.status(403).json({
                message: "Usuário não tem permissão"
            }));
        }
        return next();
        // const userPermission = await prismaClient.user.findMany({
        //   where:{
        //     id:Number(id)
        //   },
        //   select:{
        //     UserPermission:{
        //       select:{
        //         permission:{
        //           select:{
        //             name: true
        //           }
        //         }
        //       }
        //     }
        //   }
        // })
        // if(!userPermission){
        //   return response.status(400).json("permission não existe")
        // }
        // if(userPermission){
        //   return response.json(userPermission)
        // }
        // console.log(permissionRoutes)
        // if(userPermission == permissionRoutes){
        //   return response.status(400).json("permission não adquirido")
        // }
    });
}
exports.can = can;
;
function is(rolesRoutes) {
    return (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        const existRoles = rolesRoutes.every(item => { var _a; return (_a = request.user.roles) === null || _a === void 0 ? void 0 : _a.includes(item); }); //compara array
        if (!existRoles) {
            return (response.status(403).json({
                message: "Usuário não tem role"
            }));
        }
        return next();
    });
}
exports.is = is;
//# sourceMappingURL=permissions.js.map