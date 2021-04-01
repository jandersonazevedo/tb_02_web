const { Router } = require("express")
const express = require("express")
const routes = express.Router()

const PublicacaoController = require("./controllers/PublicacaoController")
const TopicoController = require("./controllers/TopicoController")
const UsuarioController = require("./controllers/UsuarioController")

//Publicacoes
CRUD("publicacoes", PublicacaoController);
//Topicos
CRUD("topicos", TopicoController);
//Usuarios
CRUD("usuarios", UsuarioController);

function CRUD(name, controller) {
    //index (mostrar tudo)
    routes.get("/" + name, controller.index);
    //mostrar (por id)
    routes.get("/" + name + "/:id", controller.show);
    //postar
    routes.post("/" + name, controller.store);
    //deletar
    routes.delete("/" + name + "/:id", controller.destroy);
    //atualizar
    routes.put("/" + name + "/:id", controller.update);
}

module.exports = routes