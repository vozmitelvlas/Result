const mongoose = require('mongoose')

const PatientRequestSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    }
})

const PatientRequest = mongoose.model('Request', PatientRequestSchema)

module.exports = PatientRequest