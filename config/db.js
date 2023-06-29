const mongoose = require('mongoose')
require('dotenv').config();


async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('============= success')

    } catch (error) {
        console.log('============= error', error)
    }
}

module.exports = { connect }