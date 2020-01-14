const express = require('express')
const router = new express.Router()
const User = require('../controllers/users')

router.post('/users', User.create)

router.post('/users/login', User.login)

router.patch('/users/:id', User.patch)

module.exports = router