import {config} from "dotenv";
config()
import express from "express";
import {addNote, editNote, getNotes, removeNote} from "./notes.controller.js"
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


mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    app.listen(port, () => {
        console.log('start')
    })
})