const express = require('express')
const dbconfig = require('./config/db.config')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})


mongoose.Promise = global.Promise


//initate the connection
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Database connection successful')
}).catch(err => {
    console.log('Could not connect')
    console.log(err)
    process.exit()
})
//Express
const api = express()


api.use(express.urlencoded({ extended: true}))
// body parser content type = application/json
api.use(express.json())
require('./routes/routes')(api)

api.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})


//setup listener - Will use env later
api.listen(process.env.PORT, () =>{
    console.log('Listening on Port 3001')
})

//need to setup mongo DB connection
//need to make mongo schema
//need to make routes