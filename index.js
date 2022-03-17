const express = require('express')
const path = require('path')
const app = express();

const expressSession = require('express-session');
const passport = require('passport')

require('dotenv').config();

require('./src/config/db')
const User = require('./src/models/UserModel')

app.set('views',path.join(__dirname,'./src/views'));
app.set('view engine','ejs')

app.use(expressSession({
    saveUninitialized:false,
    resave:false,
    secret:'secret'
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname,'./src/static')))

app.use('/user',require('./src/routes/UserRoutes'))

app.use(require('cors')());

app.listen(process.env.PORT,()=>console.log('server running on port',process.env.PORT))