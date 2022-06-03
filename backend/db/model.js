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
})

const TempUsers = mongoose.model('TempUsers',userSchema,'TempUsers');
const Notices = mongoose.model('Notices',noticeSchema,'Notices');

module.exports = {TempUsers,Notices};