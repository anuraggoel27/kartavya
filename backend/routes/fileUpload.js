const route = require('express').Router();
const multer = require('multer');
const { StudyMaterial } = require('../db/model');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { uploadFile, deleteFile, generatePublicURL } =require('../middleware/drive');
const { file } = require('googleapis/build/src/apis/file');

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
        const name = req.file.originalname;
        const filePath = path.join(__dirname,'..','files',req.file.originalname);
        const res1 = await uploadFile(name,filePath);
        const fileId=res1.data.id;
        const res2 = await generatePublicURL(fileId);
        const webView = res2.data.webViewLink; //open in browser
        const webContent = res2.data.webContentLink; //directly download

        const newPdf = await StudyMaterial.create({
            name:name,
            fileId:fileId,
            webViewLink:webView,
            webContentLink:webContent,
            class:req.body.class,
            subject:req.body.subject,
            chapter:req.body.chapter,
            description:req.body.description,
        })
        console.log('New pdf uploaded to database');
        res.status(200).json({success:true,msg:"Pdf uploaded"});
        
    } catch (error) {
        console.log(error);
        res.send(400).json({success:false,msg:"something went wrong"});
    }
})

route.delete('/delete',async (req,res) =>{
    try {
        const fileId=req.body.fileId;
        await deleteFile(fileId);
        await StudyMaterial.deleteOne({fileId:fileId});
        console.log('Pdf deleted');
        res.status(200).json({success:true,msg:"Pdf deleted"});

    } catch (error) {
        console.log(error);
        res.send(400).json({success:false,msg:"something went wrong"});
    }
})

module.exports = route;