const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
    create: async (req, res) => {
        const {name, email, password} = req.body
        try {
            const user = await new User({
                name,
                email,
                password
            })
            await user.save()

            const token = await user.generateAuthToken()
             
            return res.status(201).send({user, token})
        } catch(e){
            res.status(500).send(e)
        }   
    },
    login: async (req, res) => {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password) 
            const token = await user.generateAuthToken()
            res.send({user, token})
        } catch(e) {
            res.status(400).send(e)
        }
    },
    patch: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            console.log('req.body', req.body)
        } catch(e) {
            res.status(404).send(e)
        }
    }  

}