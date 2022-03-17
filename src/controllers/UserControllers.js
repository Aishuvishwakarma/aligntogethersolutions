const UserModel = require('../models/UserModel')
const PostModel = require('../models/PostModel')
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(UserModel.authenticate()));

exports.HomeController = (req,res)=>{
    res.status(200).json({message:'this is test route of user'})
}   

exports.RegisterController = (req,res)=>{
const NewUser = new UserModel({
    username : req.body.username,
    email: req.body.email
    })
    UserModel.register(NewUser,req.body.password)
    .then(u=>{
    passport.authenticate('local')(req,res,function(){
        res.json({message:'User register sucessfully',u})
    })
    })
    .catch(e=>res.send(e))

}


exports.UserPostController  = (req,res)=>{
    UserModel.findOne({username:req.session.passport.user})
    .then(user=>{
        PostModel.create({
            status: req.body.status,
        })
        .then(postCreated=>{
            user.posts.push(postCreated)
            user.save()
            .then(()=>res.json({message:'post created succesfully'}))
        })
    })

}