const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})


module.exports = {
    url: process.env.ATLAS_URL
}
