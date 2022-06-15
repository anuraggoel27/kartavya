const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    salt: String,
    hash: String,
    isAdmin: Boolean,
    firstName: String,
    lastName: String,
    standard: String,
    roll: String,
    subjects: [
        {
            type: String,
        },
    ],
    attendance: Number,
    mobileNumber: String,
    parentDetails: {
        father: {
            name: {type:String},
            occupation: {type:String},
            mobileNumber: {type:String},
        },
        mother: {
            name: {type:String},
            occupation: {type:String},
            mobileNumber: {type:String},
        },
    },
    address: {
        locality: {type:String},
        city: {type:String},
        pincode: {type:String},
    },
});

const noticeSchema = new mongoose.Schema(
    {
        //add date
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const studyMaterialSchema = new mongoose.Schema({
    fileId: String,
    name: String,
    webContentLink: String,
    webViewLink: String,
    class: Number,
    subject: String,
    chapter: String,
    description: String,
});

const Users = mongoose.model("Users", userSchema, "Users");
const Notices = mongoose.model("Notices", noticeSchema, "Notices");
const StudyMaterial = mongoose.model(
    "StudyMaterial",
    studyMaterialSchema,
    "StudyMaterial"
);
module.exports = { Users, Notices, StudyMaterial };
