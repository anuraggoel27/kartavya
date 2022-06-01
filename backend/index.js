const express = require('express');
const app=express();
const cors= require('cors');
const session = require('express-session');
const passport = require('passport');
const googleRoute = require('./routes/authGoogle');
const passportSetup = require('./passport/passport');

app.use(session({
    name:"noone_suuny",
    secret:"noone_sunny",
    cookie: {}
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true
}))

app.use('/auth/google',googleRoute);

app.listen(5000,()=>console.log('server running'))