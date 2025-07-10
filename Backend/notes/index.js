import chalk from "chalk"
import express from 'express'
import {addNote, editNoteById, getNotes, removeNoteById} from "./notes.controller.js"

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
    })
})
app.post('/', async (req, res) => {
    await addNote(req.body.title)
    res.render('index', {
        title: "Express App",
        notes: await getNotes(),
        created: true,
    })
})
app.delete('/:id', async (req, res) => {
    await removeNoteById(req.params.id)
    res.render('index', {
        title: "Express App",
        notes: await getNotes(),
        created: false,
    })
})

app.put(`/:id`, async (req, res) => {
    await editNoteById(req.params.id, req.body.title)
    res.render('index', {
        title: "Express App",
        notes: await getNotes(),
        created: false,
    })
})

app.listen(port, () => {
    console.log(chalk.green(`Server has been started on ${port}...`))
})