const PatientRequest = require('../models/patient-request')
const Operator = require('../models/operator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../constants')

async function addRequest(request) {
    await PatientRequest.create({
        ...request,
        date: new Date(),
    })
}

async function loginOperator({email, password}) {
    const operator = await Operator.findOne({email})
    if (!operator) {
        throw new Error('Пользователь с таким email не найден.')
    }

    const isPasswordCorrect = await bcrypt.compare(password, operator.password)
    if (!isPasswordCorrect) {
        throw new Error('Неверный пароль.')
    }

    return {
        token: jwt.sign({email}, JWT_SECRET, {expiresIn: '30d'}),
        operator,
    }
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

async function getAllRequests(phrase, sortField, sortOrder, page, limit) {
    const regex = new RegExp(escapeRegex(phrase), 'i')
    const query = {
        $or: [
            {user: {$regex: regex}},
            {number: {$regex: regex}},
            {description: {$regex: regex}},
            {date: {$regex: regex}}
        ]
    }
    const currentPage = parseInt(page)
    const perPage = parseInt(limit)

    const sortOptions = {}
    sortOptions[sortField] = parseInt(sortOrder)

    const [requests, total] = await Promise.all([
        PatientRequest.find(query).sort(sortOptions)
            .skip((currentPage - 1) * perPage)
            .limit(perPage),
        PatientRequest.countDocuments(query)
    ])

    return {
        res: requests,
        totalPages: Math.ceil(total / perPage)
    }
}

module.exports = {
    addRequest,
    loginOperator,
    getAllRequests,
}