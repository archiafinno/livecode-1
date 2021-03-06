const router = require('express').Router()
const UserController = require('../controllers/UserController.js')

// router.get('/', UserController.read)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router