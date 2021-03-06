const mongoose = require('mongoose')

const PublicacaoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    mensagem: {
        type: String,
        required: true,
    },
    idTopico: {
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

module.exports = mongoose.model('Publicacao', PublicacaoSchema)