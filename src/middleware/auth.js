const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    console.log('this is something')
    const token = req.header('Authorization').replace('Bearer ', '')
    console.log('this is token', token)
    // const decoded = jwt.verify(token, 'thisismynewsecret')
    // console.log('this is decoded', decoded)
    next()
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewsecret')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })

        if(!user) {
            throw new Error ()
        }

        req.user = user
        next()
        
    } catch (e) {
        res.status(404).send({error: 'Please Authenticate'})
    }
}

module.exports = auth