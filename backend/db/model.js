const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    googleID: String,
    isAdmin: Boolean
})

const noticeSchema = new mongoose.Schema({
    //add date
    title:String,
    description: String
},{
   timestamps:true
})

const studyMaterialSchema = new mongoose.Schema({
    name:String,
    class:Number,
    subject:String,
    chapter:String,
    description:String,
    pdf:{
        data:Buffer,
        contentType: String
    }
})

const TempUsers = mongoose.model('TempUsers',userSchema,'TempUsers');
const Notices = mongoose.model('Notices',noticeSchema,'Notices');
const StudyMaterial = mongoose.model('StudyMaterial',studyMaterialSchema,'StudyMaterial');
module.exports = {TempUsers,Notices, StudyMaterial};