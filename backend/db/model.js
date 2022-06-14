const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    salt: String,
    hash: String,
    isAdmin: Boolean,
    firstname:String,
    lastname:String,
    standard:String,
    roll:String,
    subjects:[{
        type:String
    }],
    attendance:Number,
    mobileNumber:String,
    parent_details:{
        father:{
            name:String,
            occupation:String,
            mobileNumber:String
        },
        mother:{
            name:String,
            occupation:String,
            mobileNumber:String
        }
    },
    address:{
        locality:String,
        city:String,
        pincode:String,
    }
})

const noticeSchema = new mongoose.Schema({
    //add date
    title:String,
    description: String
},{
   timestamps:true
})

const studyMaterialSchema = new mongoose.Schema({
    fileId:String,
    name:String,
    webContentLink:String,
    webViewLink:String,
    class:Number,
    subject:String,
    chapter:String,
    description:String,
})

const Users = mongoose.model('Users',userSchema,'Users');
const Notices = mongoose.model('Notices',noticeSchema,'Notices');
const StudyMaterial = mongoose.model('StudyMaterial',studyMaterialSchema,'StudyMaterial');
module.exports = {Users,Notices, StudyMaterial};