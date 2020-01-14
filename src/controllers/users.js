const User = require('../models/user')

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
            return res.status(201).send(user)
        } catch(e){
            res.status(500).send(e)
        }   
    },

}