const mongoose = require('mongoose')

const plm = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    email:String,
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'post'}],
    password:String
},{timestamps:true})

UserSchema.plugin(plm);

module.exports = mongoose.model('user',UserSchema)