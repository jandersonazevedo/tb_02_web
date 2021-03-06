const mongoose = require("mongoose")

const Topico = mongoose.model("Topico")
const Publicacao = mongoose.model("Publicacao")

module.exports = {
    async index(req, res) {
        const topicos = await Topico.find();

        return res.json(topicos)
    },

    async store(req, res) {
        const topicos = await Topico.create(req.body)

        return res.json(topicos)
    },

    async show(req, res) {
        const topicos = await Topico.findById(req.params.id)

        return res.json(topicos)
    },

    async update(req, res) {
        const topicos = await Topico.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(topicos)
    },

    async destroy(req, res) {
        await Topico.findByIdAndRemove(req.params.id)
        const publicacoes = await Publicacao.find({ "idTopico": req.params.id });
        var object = Object.values(publicacoes);

        for (var i = 0; i < object.length; i++) {
            var idTopico = object[i]["idTopico"];
            var title = object[i]["title"];
            var publicacaoId = object[i]["_id"];
            console.log("Apagando Publicacao id " + publicacaoId + " | " + title);
            await Publicacao.findByIdAndRemove(publicacaoId);
        }
        return res.send()
    }
}