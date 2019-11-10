const chatroomRoutes = require('../controllers/chatroomController')

const routes = (app) => {
    app.route('/chatroom')
    .post(chatroomRoutes.postMessage)
    .get(chatroomRoutes.getMessages)
}

module.exports = {routes}