$(function () {
    $("#nav-placeholder").load("./nav");
});

function enterChatRoom(){
    showChat('http://localhost:3000/chatroom')
}

async function showChat(url){
    try{
        console.log('SHOWING CHAT ROOM');
        let myPromise = await fetch(url)
        let myResponse = await myPromise.json()
        
        document.getElementById('inside').innerHTML += myResponse.map(x => x.messages + '<br/>').join('')
    }catch(error){
        console.log(error);
        
    }
}

function addToChat(){
    let uname = document.getElementById('username-input').value
    let message = document.getElementById('newmessage').value
    
    callAddToPosts('http://localhost:3000/chatroom',uname, message)
}

async function callAddToPosts(url, uname, message) {
    try{
        console.log('ADDING TO ALL POSTS');
        url += `?messages=${message}`
        let myPromise = await fetch(url)
        let myResponse = await myPromise.json()
        let date = (new Date()).toString()
        
        console.log(message);
        
        callAddPost('http://localhost:3000/chatroom', message)
    }catch(error){
        console.log(error);
        
    }
}

async function callAddPost(url, message) {
    try {
        params = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                messages: message
            }),
            method: 'POST'
        }
        console.log(params);
        
        let myPromise = await fetch(url, params)
        let myResponse = await myPromise.json()
        document.getElementById('inside').innerHTML += JSON.stringify(myResponse);
    } catch (error) {
        console.log(error);

    }
}

async function postUser() {
    const uname = document.getElementById('username-input').value
    const pw = document.getElementById('password-input').value
    callPost('http://localhost:3000/user', uname, pw)
    
}

function getPosts(){
    let uname = document.getElementById('username-input').value
    let pw = document.getElementById("password-input").value
    document.getElementById('getposts').innerHTML = `<p style="color:#39ff14">${uname} logged in</p>`
    callPosts("http://localhost:3000/chatroom")
    
}

async function callPosts(url) {
    try{
        let myPromise = await fetch(url)
        let myResponse = await myPromise.json()
        document.getElementById('inside').innerHTML = myResponse
    }catch(error){
        console.log(error);
        
    }
}
async function getChatRoom(url, uname){
    try{
        console.log('SENDING HTTP GET')
        let data = await fetch(url)
        let myJson = await data.json()
        document.getElementById('inside').innerHTML += myJson.map(obj => obj.messages)
    }catch(error){
        console.log(error);
        
    }
}

async function callPost(url, uname, pw) {
    try {
        params = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                username: uname,
                password: pw
            }),
            method: 'POST'
        }
        let myPromise = await fetch(url, params)
        let myResponse = await myPromise.json()
        document.getElementById('inside').innerHTML = JSON.stringify(myResponse)
        document.getElementById('inside').innerHTML = `<h1>Username ${uname} created</h1>`
    } catch (error) {
        console.log(error);

    }
}

async function getMessagesPerIndividual(url){
    try{
        console.log('SENDING HTTP GET')
        let uname = document.getElementById('searchforuser').value
        url += `?username=${uname}`
        let myPromise = await fetch(url)
        let myResponse = await myPromise.json()
        let id = myResponse[0]._id
        getMessages(`http://localhost:3000/blogPost?user=${id}`, uname)
    }catch(error){
        console.log(error);
    }
}

async function getMessages(url, uname){
    try{
        console.log('SENDING HTTP GET')
        let data = await fetch(url)
        let myJson = await data.json()
        document.getElementById('inside').innerHTML = myJson.map(obj => `<div id="post"><div id="uname">${uname}<div id="date">${obj.date}</div></div><br/><div id="title">${obj.title}</div><br/><div id="blogpost">${obj.blogpost}</div><br/></div><br/>` + '<br/>').reverse().join('')
    }catch(error){
        console.log(error);
        
    }
}
