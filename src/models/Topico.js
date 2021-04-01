const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

TopicoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Topico', TopicoSchema)