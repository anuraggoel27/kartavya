const router = require('express').Router();
const passport = require('passport');
const authenticationCheck = require('../middleware/authenticated');

const CLIENT_URL = "http://localhost:3000/"

router.get('/login/success',authenticationCheck,(req,res)=>{
    res.status(200).json({
        success:true,
        msg:"successful",
        user:req.user
    })
    
})

router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        success: false,
        msg:"failure"
    })
})


router.get('/',passport.authenticate('google',{ scope:["profile"] }));

router.get('/callback',passport.authenticate('google',{
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))

router.get('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err) { return next(err); }
        res.redirect(CLIENT_URL);
    })
})

module.exports = router;