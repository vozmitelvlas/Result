import express from "express";
import {loginUser, addUser} from "../user.controller.js";
import {auth} from "../middlewares/auth.js";
import {getNotes, addNote, removeNote, editNote} from "../notes.controller.js"
export const router = express.Router()

router.get('/login', async (req, res) => {
    res.render('login', {
        title: 'Express App',
        error: undefined,
    })
})
router.post('/login', async (req, res) => {
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
router.get('/register', async (req, res) => {
    res.render('register', {
        title: 'Express App',
        error: undefined,
    })
})
router.post('/register', async (req, res) => {
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
router.get('/logout', (req, res) => {
    res.cookie('token', '', {httpOnly: true})
    res.redirect('/login')
})

router.use(auth)
router.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false,
        error: false,
        userEmail: req.user.email,
    })
})
router.post('/', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

router.put(`/:id`, async (req, res) => {
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