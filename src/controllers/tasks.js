const Task = require('../models/task')

module.exports = {
    create: async (req, res) => {
        const {title, description} = req.body
        try {
            // Add stuff here
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