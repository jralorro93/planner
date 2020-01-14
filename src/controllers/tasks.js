const Task = require('../models/task')

module.exports = {
    create: async (req, res) => {
        const {title, description} = req.body
        try {

        } catch (e) {
            return res.status(500).send(e)
        }
    }
}