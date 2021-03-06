const mongoose = require("mongoose");

const Publicacao = mongoose.model("Publicacao")

module.exports = {
    async index(req, res) {
        const publicacoes = await Publicacao.find();

        return res.json(publicacoes)
    },

    async store(req, res) {
        console.log("...............................................");
        console.log(req.body);
        const publicacoes = await Publicacao.create(req.body)

        return res.json(publicacoes)
    },

    async show(req, res) {
        const publicacoes = await Publicacao.findById(req.params.id)

        return res.json(publicacoes)
    },

    async update(req, res) {
        const publicacoes = await Publicacao.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(publicacoes)
    },

    async destroy(req, res) {
        await Publicacao.findByIdAndRemove(req.params.id)

        return res.send()
    }
}