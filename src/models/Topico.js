const mongoose = require('mongoose')

const TopicoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    idAutor: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Topico', TopicoSchema)