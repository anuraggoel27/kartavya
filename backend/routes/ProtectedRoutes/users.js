const route = require('express').Router();
const { validatePassword,genPassword } = require('../../passport/jwtMiddleware');
const { Users } = require("../../db/model")

route.get('/isLogged',(req,res)=>{
    res.status(200).json({success:true,data:req.user});
})

route.get('/profile',(req,res)=>{
    console.log('profile route called');
    console.log(req.user);
    res.status(200).json({success:true,user:req.user});
})

route.put('/changePassword',async (req,res)=>{
    const user = req.user;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const flag = validatePassword(oldPassword,user.salt,user.hash);
    if(!flag){
        return res.status(404).json({success:false,msg:"Old password is wrong"})
    }
    const saltNhash = genPassword(newPassword);
    const newSalt = saltNhash.salt;
    const newHash= saltNhash.hash; 
    try {
        const updatedUser =await Users.findOneAndUpdate({_id:user._id},
            {
                salt:newSalt,
                hash: newHash
            },
            {new:true});
        console.log(updatedUser);
        res.status(200).json({success:true,msg:"Password succesfully changed"});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,msg:"something went wrong"});
    }
    
        
    
})
module.exports = route