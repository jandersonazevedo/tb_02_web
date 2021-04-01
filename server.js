const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/forum', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(conn => {
        console.log('Conexão OK!')
    })
    .catch(err => {
        console.log('Falha na conexão do Banco de Dados')
    })

requireDir('./src/models/')

app.use(bodyParser.json());
app.use("/api", require("./src/routes"))

app.post('/login', (req, res) => {

    return res.end()
})

app.listen(3003)