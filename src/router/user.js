const express = require('express')
const router = new express.Router()
const User = require('../controllers/users')
const auth = require('../middleware/auth')

router.post('/users', User.create)

router.post('/users/login', User.login)

// Need to fix auth middleware
router.post('/users/logout', User.logout)

router.patch('/users/:id', auth, User.patch)

router.get('/users/mec', auth, User.getUser)

router.delete('/users/:id', User.deleteUser)


module.exports = router 