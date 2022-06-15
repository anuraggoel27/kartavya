const route = require("express").Router();
const { Users } = require("../../db/model");
const {
    validatePassword,
    issueJwt,
    genPassword,
} = require("../../passport/jwtMiddleware");

route.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    try {
        const user = await Users.findOne({ username: username });
        if (!user) {
            return res
                .status(401)
                .json({ success: false, msg: "username doesn't exists" });
        }

        const doesExist = validatePassword(password, user.salt, user.hash);
        if (!doesExist) {
            return res
                .status(401)
                .json({ success: false, msg: "password doesn't match" });
        }
        const jwt = issueJwt(user);
        console.log(jwt);
        res.status(200).json({
            success: true,
            msg: "successfully logged in",
            token: jwt.token,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error });
    }
});

module.exports = route;
