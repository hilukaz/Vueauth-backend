"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(cors());
app.use(routes_1.router);
app.get('/a', (req, res) => {
    res.send('Olá! Bem-vindo à raiz da aplicação!');
});
app.listen(PORT, () => console.log("Server running " + PORT));
//# sourceMappingURL=server.js.map