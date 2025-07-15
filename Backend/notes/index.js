import express from 'express'
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import {router} from "./routes/index.js"

const port = 3000
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'pages')
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use('/', router)


mongoose.connect('mongodb+srv://vlas:mongopass@vlas.tirar59.mongodb.net/notes?retryWrites=true&w=majority&appName=Vlas').then(() => {
    app.listen(port, () => {

    })
})