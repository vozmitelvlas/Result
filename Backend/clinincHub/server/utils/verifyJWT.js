const JWT_SECRET = require('../constants')
const jwt = require('jsonwebtoken')
function verifyJWT(req) {
    const token = req.cookies.token
    try {
        const verifyResult = jwt.verify(token, JWT_SECRET)
        req.user = {
            email: verifyResult.email
        }
    } catch (e) {
        const error = new Error()
        error.statusCode = 401
        throw error
    }
}

module.exports = verifyJWT