var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
const cors = require('cors')
var indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const generateOperators = require("./utils/generateOperators")

const port = 3000
var app = express()
app.use(cors());

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/', indexRouter)

mongoose.connect('mongodb+srv://vlas:mongopass@vlas.tirar59.mongodb.net/clinic?retryWrites=true&w=majority&appName=Vlas').then(async () => {
    await generateOperators()
    app.listen(port, () => {
    })
})

module.exports = app

