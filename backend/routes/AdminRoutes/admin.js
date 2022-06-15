const route = require('express').Router();

route.get('/',(req,res)=>{
    res.status(200).json({success:true, msg:"You are allowed"});
})

module.exports = route;