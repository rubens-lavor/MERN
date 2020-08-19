const express = require("express");

const routes = express.Router();

const Usuario = require("./controllers/usuariosControllers");
const usuarios = require("./models/usuarioModel");

routes.get("/", Usuario.index);

//rotas de usuários
routes.post("/api/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios/:id", Usuario.show);
routes.delete("/api/usuarios/:id", Usuario.destroy);

module.exports = routes;
