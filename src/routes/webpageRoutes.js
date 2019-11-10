const webpageRoutes = require('../controllers/webpageController')

const routes = (app) => {
    app.route('/')
    .get(webpageRoutes.sendHTML)

    app.route('/userSignIn')
    .get(webpageRoutes.userSignInPage)

    app.route('/createUser')
    .get(webpageRoutes.createUserPage)

    app.route('/css')
    .get(webpageRoutes.getCSS)

    app.route('/js')
    .get(webpageRoutes.getJS)

    app.route('/nav')
    .get(webpageRoutes.getNav)

    app.route('/messages')
    .get(webpageRoutes.messagesPage)
}

module.exports = {routes}