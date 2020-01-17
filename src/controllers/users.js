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
        // Gets the keys from req.body and turns it into an array of keys
        const updates = Object.keys(req.body)
        // Make as a checker for updates
        const allowedUpdates = ['email', 'name', 'password']
        // Returns true or false, depending on updates and allowedUpdates
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(404).send({error: 'Invalid updates'})
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            
            if (!user) {
                return res.status(404).send()
            }

            res.send(user)
        } catch(e) {
            res.status(404).send(e)
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            return res.status(200).send(user)
        } catch(e) {
            res.status(404).send(e)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id) 
            console.log('this is user', user)
            res.send(user)
        } catch (e){
            res.status(404).send(e)
        }    
    },
    logout: async (req, res) => {
        try {
           const user = req.user
           console.log('user', user)
        } catch(e){
            res.send(500).send(e)
        }
    }  
}