const mongoose = require('mongoose')
const MongoDB_URL = require('./keys').url.mongodbURL
mongoose.connect(MongoDB_URL)
.then(()=>console.log('db configured'))
.catch((err)=>console.log('internal server err',err))