const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
var bodyParser = require('body-parser')
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/forum',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

requireDir('./src/models/')
app.use(bodyParser.json());
app.use("/api", require("./src/routes"))

app.listen(3004)