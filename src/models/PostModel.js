const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    status: String,
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
},{timestamps:true})

module.exports = mongoose.model('post',PostSchema)