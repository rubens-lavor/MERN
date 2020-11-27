const express = require("express");

const routes = express.Router();

const Usuario = require("./controllers/usuariosControllers");
const Produtos = require("./controllers/produtosControllers");
//const usuarios = require("./models/usuarioModel");

routes.get("/", Usuario.index);

//rotas de usuários
routes.post("/api/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios/:id", Usuario.show);
routes.delete("/api/usuarios/:id", Usuario.destroy);
routes.put("/api/usuarios", Usuario.update);
routes.post("/api/usuarios/login", Usuario.login);
routes.get("/api/lista_usuarios/checktoken", Usuario.checkToken);


//rotas de produtos
routes.post("/api/produtos", Produtos.create);
routes.get("/api/produtos", Produtos.index);
routes.get("/api/produtos/:id", Produtos.show);
routes.delete("/api/produtos/:id", Produtos.destroy);
routes.put("/api/produtos/:id", Produtos.update);


module.exports = routes;
