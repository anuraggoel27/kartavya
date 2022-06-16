const route = require('express').Router();

route.get('/isLogged',(req,res)=>{
    res.status(200).json({success:true,data:req.user});
})

route.get('/profile',(req,res)=>{
    console.log('profile route called');
    console.log(req.user);
    res.status(200).json({success:true,user:req.user});
})

module.exports = route