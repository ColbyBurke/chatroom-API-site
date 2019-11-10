const mongoose = require('mongoose')

const message = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date:{
        type: String
    }
})

module.exports = {message}