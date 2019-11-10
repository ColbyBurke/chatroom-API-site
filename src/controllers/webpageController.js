const mongoose = require('mongoose')
const path = require('path')


const getImage = async (request, response) => {
    try{
        
    }catch(error){
        response.status(500).send(error)
    }
}

const sendHTML = async (request, response) => {
    try{
        console.log('SEND HTML');
        response.sendFile(path.join(__dirname + '/../views/index.html'))
    }catch (error){
        response.status(500).send(error)
    }
}

const userSignInPage = async (request, response) => {
    try{
        console.log('USER SIGN IN');
        response.sendFile(path.join(__dirname + '/../views/userSignIn.html'))
    }catch(error){
        response.status(500).send(error)
    }
}

const createUserPage = async (request, response) => {
    try{
        console.log('SEND HTML TO CREATE USER');
        response.sendFile(path.join(__dirname + '/../views/createUser.html'))
    }catch(error){
        response.status(500).send(error)
    }
}

const getCSS = async (request, response) => {
    try{
        console.log('GET CSS');
        response.sendFile(path.join(__dirname + '/../views/styles.css'))
    }catch (error){
        response.status(500).send(error)
    }
}
const getJS = async (request, response) => {
    
    try{
        console.log('GET CSS');
        response.sendFile(path.join(__dirname + '/../../main.js'))
    }catch (error){
        response.status(500).send(error)
    }
}

const messagesPage = async (request,response)=>{
    try{
        console.log("SEND HTML TO GET BLOG POSTS")
        response.sendFile(path.join(__dirname + '/../views/messages.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const getNav = async (request, response) => {
    try{
        console.log('GET NAV BAR');
        response.sendFile(path.join(__dirname + '/../views/nav.html'))
    }catch(error){
        response.status(500).send(error)
    }
}

module.exports = {sendHTML, createUserPage, getCSS, userSignInPage, getJS, messagesPage, getNav}