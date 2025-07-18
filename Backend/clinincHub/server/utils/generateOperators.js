const bcrypt = require('bcrypt')
const Operator = require('../models/operator')
const generateOperators = async () => {
    await Operator.deleteMany()
    for (let i = 1; i < 4; i++) {
        const password = 'qwe' + i
        const email = i + 'ivanov@mail.ru'
        const passwordHash = await bcrypt.hash(password, 10)
        await Operator.create({email, password: passwordHash})
    }
}

module.exports = generateOperators