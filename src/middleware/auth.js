const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')

    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewsecret')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })

        if(!user) {
            throw new Error ()
        }
        // Adds a a property on req
        req.user = user
        next()
        
    } catch (e) {
        res.status(404).send({error: 'Please Authenticate'})
    }
}

module.exports = auth