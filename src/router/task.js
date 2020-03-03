const express = require('express')
const router = new express.Router()
const Task = require('../controllers/tasks')
const auth = require('../middleware/auth')

router.post('/tasks/create', auth, Task.create)

module.exports = router