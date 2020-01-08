const express = require('express')
require('./db/mongoose')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const userRouter = require('./router/user')

//Set up paths for Express
// const viewsPath = path.join(__dirname, '../templats/views')
// const publicDirPath = path.join(__dirname, '../public')

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.use(bodyParser.json())
app.use(userRouter)

app.listen(3000, () => {
    console.log('The server is running on port', 3000)
})