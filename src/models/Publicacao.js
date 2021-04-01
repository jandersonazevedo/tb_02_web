const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

PublicacaoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Publicacao', PublicacaoSchema)