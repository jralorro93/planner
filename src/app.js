const express = require('express')
require('./db/mongoose')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

//Set up paths for Express
// const viewsPath = path.join(__dirname, '../templats/views')
// const publicDirPath = path.join(__dirname, '../public')

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(3000, () => {
    console.log('The server is running on port', 3000)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log('password:', password)
//     console.log('hasedpassword', hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log('isMatch', isMatch)
// }

// myFunction()