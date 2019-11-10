const mongoose = require('mongoose')
const messageSchema = require('../models/messageModel')

const MessageModel = mongoose.model('message', messageSchema.message)

const postMessage = async (request, response) => {
    try{
        console.log('POST MESSAGE');
        var messageInstance = new MessageModel(request.body)
        console.log(messageInstance);
        const created = await MessageModel.create(messageInstance)
        response.send(created)
    }catch (error){
        response.status(500).send(error)
    }
}

const getMessages = async (request, response) => {
    try{
        console.log('GET MESSAGES')
        var messageInstance = await MessageModel.find(request.query)
        response.send(messageInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

module.exports = {postMessage, getMessages}