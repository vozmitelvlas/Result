const mongoose = require('mongoose')

const OperatorSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
})

const Operator = mongoose.model('Operator', OperatorSchema)

module.exports = Operator