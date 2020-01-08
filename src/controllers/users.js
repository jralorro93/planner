const User = require('../models/user')

module.exports = {
    create: async (req, res) => {
        console.log('this is req.body', req)
        try {
            const user = await new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            await user.save()
            return res.status(201).send(user)
        } catch(e){
            res.status(500).send(e)
        }
        
    }
}