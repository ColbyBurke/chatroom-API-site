const messageRoutes = require('../controllers/messageController')

const routes = (app) => {
    app.route('/messages')
    .post(messageRoutes.postMessage)
    .get(messageRoutes.getMessages)
}

module.exports = {routes}