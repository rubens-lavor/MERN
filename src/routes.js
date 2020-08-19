const express = require("express");

const routes = express.Router();

const Usuario = require("./controllers/usuariosControllers");


routes.get("/", Usuario.index);
routes.post("/api/usuarios", Usuario.create);

module.exports = routes;
