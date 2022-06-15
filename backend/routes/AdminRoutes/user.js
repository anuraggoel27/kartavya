const route = require('express').Router();
const { Users } = require('../../db/model');
const { validatePassword, issueJwt, genPassword } = require('../../passport/jwtMiddleware');

route.post('/register',async (req,res) =>{
    const {username,password,firstName,lastName,isAdmin,standard,roll,subjects,mobileNumber,fatherName,fatherOccupation,fatherMobileName,motherName,motherOccupation,motherMobileNumber,location,city,pincode}=req.body.data;
    console.log(req.body.data);
    // const salt =  saltNHash.salt;
    // const hash = saltNHash.hash;
        
    // // res.send(username,salt);

    // try {
    //     console.log(username,salt);
    //     const newUser = await Users.create({
    //         username : username,
    //         salt:salt,
    //         hash:hash
    //     })
        
    //     res.status(200).json({success:true,msg:"New user created"});

    // } catch (error) {
    //     res.status(400).json({success:false,error:error});
    // }
})


module.exports = route;