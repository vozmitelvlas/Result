const express = require('express')
const router = express.Router()
const {addRequest, loginOperator, getAllRequests} = require('../controllers')


router.post('/', async (req, res) => {
    try {
        await addRequest(req.body)

        res.sendStatus(204)
    } catch (error) {
        res.status(409).json({
            error: error.message,
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { token, operator } = await loginOperator(req.body)
        res.cookie('token', token, { secure: true, maxAge: 120000, httpOnly: true })
        res.status(200).json({email: operator.email});
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
});

router.get('/table', async (req, res) => {
    try {
        // verifyJWT(req)
        // console.log(req.cookies) === {}
        // console.log("token", req.cookies.token)
        const {phrase, page = 1, limit = 10, sortField = 'date', sortOrder = 1} = req.query

        const patientRequests = await getAllRequests(phrase, sortField, sortOrder, page, limit)
        res.status(200).json(patientRequests)
    } catch (err) {
        res.status(401).json({
            message: err.message,
        })
    }
})

module.exports = router;
