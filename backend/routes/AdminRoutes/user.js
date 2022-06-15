const route = require('express').Router();
const { Users } = require('../../db/model');
const { validatePassword, issueJwt, genPassword } = require('../../passport/jwtMiddleware');

route.post('/register',async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const saltNHash = genPassword(password);
    const salt =  saltNHash.salt;
    const hash = saltNHash.hash;
        
    // res.send(username,salt);

    try {
        console.log(username,salt);
        const newUser = await Users.create({
            username : username,
            salt:salt,
            hash:hash
        })
        
        res.status(200).json({success:true,msg:"New user created"});

    } catch (error) {
        res.status(400).json({success:false,error:error});
    }
})


module.exports = route;