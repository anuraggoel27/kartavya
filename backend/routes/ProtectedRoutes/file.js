const route = require("express").Router();
const { StudyMaterial } = require("../../db/model");
const mongoose = require("mongoose");

route.get("/getFiles", (req, res) => {
    StudyMaterial.find((err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
});

route.get("/getFile/:filename", (req, res) => {
    const file =  req.params.filename;
    StudyMaterial.find({ name: {$regex: file}}, (err, docs) => {
        if (err) {
            res.status(404).json({ success: false, msg: err });
        } else {
            res.send(docs);
        }
    });
});
module.exports = route;