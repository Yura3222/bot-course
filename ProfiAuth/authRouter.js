const Router = require('express')
const router = new Router()
const controller = require('./AuthController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddlware')


router.post('/registration', [
    check("username", "Імя Користувача не може бути пустим").notEmpty(),
    check('password', "Пароль повинен бути більше 4 і менше 10 символів").isLength({min: 4, max:  10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.get)

module.exports = router