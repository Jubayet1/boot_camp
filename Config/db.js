const mongoose = require('mongoose'); 

const connection = async() => {
    const connect = await mongoose.connect(process.env.URI)
    console.log(`connected on ${connect.connection.host}`)
}

module.exports = connection;