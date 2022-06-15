const route = require("express").Router();
const { Notices } = require("../../db/model");

route.get("/", (req, res) => {
    Notices.find((err, data) => {
        if (err) {
            res.status(400).json({
                success: true,
                msg: "Cant load data from the database",
            });
        } else {
            res.send(data);
        }
    });
});
route.get("/:id", (req, res) => {
    const id = req.params.id;
    Notices.findOne({ _id: id }, (err, docs) => {
        if (err) res.send(err);
        else res.send(docs);
    });
});

module.exports = route;
