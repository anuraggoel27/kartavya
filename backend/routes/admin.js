const route = require('express').Router();
const autheticationCheck = require('../middleware/authenticated');
const adminCheck = require('../middleware/admincheck');
const { Router } = require('express');
const { Notices } = require('../db/model');

route.use(autheticationCheck);
route.use(adminCheck);

route.get('/',(req,res)=>{
    console.log('sending status code as 200')
    res.status(200).json({success:true});
})

route.get('/createNotice',(req,res)=>{
    res.status(200).json({success:true});
})

route.post('/createNotice/newNotice',async (req,res) =>{
    console.log(req.body);
    const {title,description} = req.body;
    if(!title || !description){
        res.status(400).json({success:false,msg:"please fill all the fields"});
    }
    else{
        try {
            const notice = await Notices.create({title:title,description:description});
            res.status(200).json({success:true,msg:"new notice created"});

        } catch (error) {
            console.log(error);
            res.status(500).json({success:false,msg:"internal server error"});
        }
    }
})

module.exports = route;