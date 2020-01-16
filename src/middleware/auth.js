const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        console.log('this is req', req.header)
        next()
    } catch(e) {
        res.status(500).send(e)
    }
}

module.export = auth