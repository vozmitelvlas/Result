import chalk from "chalk"
import express from 'express'
import {addNote, editNote, getNotes, removeNote} from "./notes.controller.js"
import mongoose from "mongoose"
import {addUser, loginUser} from "./user.controller.js"
import cookieParser from "cookie-parser"
import {auth} from "./middlewares/auth.js"

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


app.get('/login', async (req, res) => {
    res.render('login', {
        title: 'Express App',
        error: undefined,
    })
})
app.post('/login', async (req, res) => {
    try {
        const token = await loginUser(req.body.email, req.body.password)
        res.cookie('token', token, {httpOnly: true})
        res.redirect('/')
    } catch (err) {
        res.render('login', {
            title: 'Express App',
            error: err.message,
        })
    }
})
app.get('/register', async (req, res) => {
    res.render('register', {
        title: 'Express App',
        error: undefined,
    })
})
app.post('/register', async (req, res) => {
    try {
        await addUser(req.body.email, req.body.password)
        res.render('login', {
            title: 'Express App',
            error: undefined,
        })
    } catch (err) {
        if (err.code === 11000) {
            res.render('register', {
                title: 'Express App',
                error: 'Email is already registered',
            })
            return
        }
        res.render('register', {
            title: 'Express App',
            error: err.message,
        })
    }
})
app.get('/logout', (req, res) => {
    res.cookie('token', '', {httpOnly: true})
    res.redirect('/login')
})

app.use(auth)
app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false,
        error: false,
        userEmail: req.user.email,
    })
})
app.post('/', async (req, res) => {
    try {
        await addNote(req.body.title, req.user.email)
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: true,
            error: false,
            userEmail: req.user.email,
        })

    } catch (err) {
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: true,
            userEmail: req.user.email,
        })
    }


})
app.delete('/:id', async (req, res) => {
    try {
        await removeNote(req.params.id, req.user.email)
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: false,
            userEmail: req.user.email,
        })
    } catch (err) {
        
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: err.message,
            userEmail: req.user.email,
        })
    }
})

app.put(`/:id`, async (req, res) => {
    try {
        await editNote(req.body, req.user.email)
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: false,
            userEmail: req.user.email,
        })
    } catch (err) {
        res.render('index', {
            title: "Express App",
            notes: await getNotes(),
            created: false,
            error: err.message,
            userEmail: req.user.email,
        })
    }
})

mongoose.connect('mongodb://user:mongopass@localhost:27017/testdb?authSource=admin').then(() => {
    app.listen(port, () => {
        console.log('start')
    })
})