const route = require("express").Router();
const { StudyMaterial } = require("../../db/model");
const mongoose = require("mongoose");
const { sasportal } = require("googleapis/build/src/apis/sasportal");

route.get("/getFiles", (req, res) => {
    StudyMaterial.find({}).sort({createdAt:-1}).exec((err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
});

route.get("/getFile/:filename", (req, res) => {
    const file = req.params.filename.toLowerCase();
    StudyMaterial.find({ name: { $regex: file } }, (err, docs) => {
        if (err) {
            res.status(404).json({ success: false, msg: err });
        } else {
            res.send(docs);
        }
    });
});
module.exports = route;
