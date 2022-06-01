const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = "http://localhost:3000/"

router.get('/login/success',(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            msg:"successful",
            user:req.user
        })
    }
    res.end();
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