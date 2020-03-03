const Task = require('../models/task')

module.exports = {
    create: async (req, res) => {
        const {title, description} = req.body
        try {
            const task = await new Task({
                title,
                description,
                owner: req.user._id
            })
            await task.save()
            return res.status(201).send(task)
        } catch (e) {
            res.status(500).send(e)
        }
    },
    getTask: async (req, res) => {
        try {
            // Add stuff here
        } catch(e) {
            res.status(404).send(e)
        }
    },
    updateTask: async (req, res) => {
        try {
            // Add stuff here
        } catch (e) {
            res.status(404).send(e)
        }
    },
    deleteTask: async (req, res) => {
        try {
            // Add stuff here
        } catch (e) {
            res.status(404).send(e)
        }
    }
}