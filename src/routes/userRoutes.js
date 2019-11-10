const userRoutes = require('../controllers/userController')

const routes = (app) => {
    app.route('/users')
    .get(userRoutes.getAllUsers)

    app.route('/user')
    .get(userRoutes.getUser)
    .post(userRoutes.postUser)
    .put(userRoutes.putUser)
    .delete(userRoutes.deleteUser)
    
}

module.exports = {routes}