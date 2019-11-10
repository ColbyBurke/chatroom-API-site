const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes/userRoutes')
const webpageRoutes = require('./src/routes/webpageRoutes')
const messageRoutes = require('./src/routes/messageRoutes')
const chatroomRoutes = require('./src/routes/chatroomRoutes')
const cors = require('cors')

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Colby:admin@colbyscluster-sxrmq.mongodb.net/chatroom?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes.routes(app)
webpageRoutes.routes(app)
messageRoutes.routes(app)
chatroomRoutes.routes(app)

const start = () => {
    return app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

module.exports = {start}