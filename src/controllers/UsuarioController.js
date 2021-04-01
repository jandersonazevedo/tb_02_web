const { Router } = require("express")
const mongoose = require("mongoose")

const Usuario = mongoose.model("Usuario")
const Topico = mongoose.model("Topico")
const Publicacao = mongoose.model("Publicacao")

module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query;
        const usuarios = await Usuario.paginate({}, { page, limit: 10 });

        return res.json(usuarios)
    },

    async store(req, res) {

        const { login } = req.body;

        try {
            if (await Usuario.findOne({ login }))
                return res.status(400).send({ error: 'Este login já está sendo usado' })

            const usuarios = await Usuario.create(req.body)

            return res.json(usuarios)
        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro' })
        }
    },

    async show(req, res) {
        const usuarios = await Usuario.findById(req.params.id)

        return res.json(usuarios)
    },

    async update(req, res) {
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(usuarios)
    },

    async destroy(req, res) {
        await Usuario.findByIdAndRemove(req.params.id)
        const topicos = await Topico.find({ "idAutor": req.params.id });
        var objectPubl = Object.values(topicos);
        for (var j = 0; j < objectPubl.length; j++) {

            const publicacoes = await Publicacao.find({ "idTopico": objectPubl[j]["_id"] });
            console.log("Apagando Tópico: " + objectPubl[j]["title"]);
            var object = Object.values(publicacoes);
            //checar e apagar todos as publicacoes do topico em questao
            for (var i = 0; i < object.length; i++) {
                var idTopico = object[i]["idTopico"];
                var title = object[i]["title"];
                var publicacaoId = object[i]["_id"];
                console.log("Apagando Publicacao id " + publicacaoId + " | " + title);
                await Publicacao.findByIdAndRemove(publicacaoId);
            }
            await Topico.findByIdAndRemove(objectPubl[j]["_id"]);
        }
        return res.send()
    },
}