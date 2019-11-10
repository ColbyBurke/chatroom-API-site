const mongoose = require('mongoose')

const chatroom = new mongoose.Schema({
    messages:{
        type: String,
        required: true
    }
})

module.exports = {chatroom}