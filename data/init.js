const mongoose = require('mongoose')
require('../src/models/Blogs')
require('../src/models/Users')
require('../src/models/Newsletter')

mongoose.set('runValidators', true)

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        console.log('connected to the db')
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

module.exports = {
    connect
}