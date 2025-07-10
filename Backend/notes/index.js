import chalk from "chalk"
import express from 'express'
import {addNote, editNoteById, getNotes, removeNoteById} from "./notes.controller.js"
import mongoose from "mongoose"

const port = 3000
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'pages')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false,
        error: false,
    })
})
app.post('/', async (req, res) => {
    try{
        await addNote(req.body.title)
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: true,
            error: false,
        })

    } catch (err) {
        console.error('Creation error', err)
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: true,
        })
    }


})
app.delete('/:id', async (req, res) => {
    await removeNoteById(req.params.id)
    res.render('index', {
        title: "Express App",
        notes: await getNotes(),
        created: false,
        error: false,
    })
})

app.put(`/:id`, async (req, res) => {
    await editNoteById(req.params.id, req.body.title)
    res.render('index', {
        title: "Express App",
        notes: await getNotes(),
        created: false,
        error: false,
    })
})

mongoose.connect('mongodb+srv://vlas:mongopass@vlas.tirar59.mongodb.net/notes?retryWrites=true&w=majority&appName=Vlas').then(() => {
    app.listen(port, () => {
        console.log(chalk.green(`Server has been started on ${port}...`))
    })
})