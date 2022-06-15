const route = require('express').Router();

route.get('/isLogged',(req,res)=>{
    res.status(200).json({success:true,data:req.user});
})

module.exports = route