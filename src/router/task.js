const express = require('express')
const router = new express.Router()
const Task = require('../controllers/tasks')

router.post('/tasks/create', Task.create)

module.exports = router