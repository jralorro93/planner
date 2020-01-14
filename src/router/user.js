const express = require('express')
const router = new express.Router()
const User = require('../controllers/users')

router.post('/users/create', User.create)

router.post('/users/login', User.login)

module.exports = router