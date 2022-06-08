const route = require('express').Router();
const multer = require('multer');
const { StudyMaterial } = require('../db/model');
const mongoose = require('mongoose');
const fs = require('fs');

const storageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./files');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storageEngine})

route.post('/new',upload.single('file'),async (req,res)=>{
    try {
        const newPdf = await StudyMaterial.create({
            name:req.body.name,
            class:req.body.class,
            subject:req.body.subject,
            chapter:req.body.chapter,
            description:req.body.description,
            pdf:{
                data: fs.readFileSync('./files/'+req.file.originalname),
                contentType: "pdf"
            }
        })

        //console.log(newPdf);
        console.log('New pdf uploaded to database');
        res.status(200).json({success:true,msg:"Pdf uploaded"});
        
    } catch (error) {
        console.log(error);
        res.send(400).json({success:false,msg:"something went wrong"});
    }
})

module.exports = route;