"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const RoleController_1 = require("./controllers/RoleController");
const UserController_1 = require("./controllers/UserController");
const SessionController_1 = require("./controllers/SessionController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const UserAccess_1 = require("./controllers/UserAccess");
const permissions_1 = require("./middlewares/permissions");
const permissions_2 = require("./common/utils/permissions");
const roles_1 = require("./common/utils/roles");
const PerfilController_1 = require("./controllers/PerfilController");
// import {AuthController} from "./controllers/AuthController"
const router = (0, express_1.Router)();
exports.router = router;
const userController = new UserController_1.UserController();
const sessionController = new SessionController_1.SessionController();
const roleController = new RoleController_1.RoleController();
const userAccess = new UserAccess_1.UserAccess();
const perfil = new PerfilController_1.PerfilController();
// const auth= new AuthController()
// const userRole=new UserRole();
router.post("/user", userController.criar);
router.post("/login", sessionController.login);
router.get("/user", userController.consultar);
router.get("/perfil", authMiddleware_1.authMiddleware, perfil.view);
router.get("/perfilpublic", perfil.viewpu);
router.put("/publicar/:id", authMiddleware_1.authMiddleware, perfil.publicar);
router.get("/auth", authMiddleware_1.authMiddleware);
router.post("/acesso", authMiddleware_1.authMiddleware, userAccess.criar);
router.put("/user/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.admin]), userController.atualizar);
// router.delete("/user/:id",userController.deletar);
router.get("/user/:id", authMiddleware_1.authMiddleware, (0, permissions_1.can)([permissions_2.PermissionsPrivate.usuarioPesquisar]), userController.pesquisar);
//router.get("/user/:id", authMiddleware,is([RolesPrivate.admin]),userController.pesquisar)
// router.post("/role",roleController.criar);
router.get("/role", roleController.consultar);
//# sourceMappingURL=routes.js.map