const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)