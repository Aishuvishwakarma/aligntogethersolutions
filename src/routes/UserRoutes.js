const express = require('express');

const router = express.Router();

const UserModel = require('../models/UserModel')
const passport = require('passport');
const LocalStrategy = require('passport-local');

const {
    RegisterController,
    HomeController,
    UserPostController
} = require('../controllers/UserControllers')

/**
 * routes GET '/user
 * desc  Testing Home Route
 * access Public
 */

router.get('/',HomeController)

/**
 * routes POST '/user/reg
 * desc  User Register Route
 * access Public
 */

router.post('/reg',RegisterController);

 /**
 * routes POST '/user/login
 * desc  User Login Route
 * access Public
 */

router.post('/login',passport.authenticate('local',{
    successRedirect:'/profile',
    failureRedirect:'/'
  }),(req,res)=>{})

 /**
 * routes POST '/user/post
 * desc  User post Route
 * access PRIVATE
 */

 router.post('/post',UserPostController)

module.exports = router;