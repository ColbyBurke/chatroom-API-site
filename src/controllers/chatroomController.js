const mongoose = require('mongoose')
const chatRoomSchema = require('../models/chatroomModel')

const ChatroomModel = mongoose.model('messages', chatRoomSchema.chatroom)

const postMessage = async (request, response) => {
    try{
        console.log('POST TO CHAT ROOM');
        var chatroomInstance = new ChatroomModel(request.body)
        console.log(chatroomInstance);
        const created = await ChatroomModel.create(chatroomInstance)
        response.send(created)
    }catch (error){
        response.status(500).send(error)
    }
}

const getMessages = async (request, response) => {
    try{
        console.log('GET CHAT ROOM')
        var chatroomInstance = await ChatroomModel.find(request.query)
        response.send(chatroomInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

module.exports = {postMessage, getMessages}