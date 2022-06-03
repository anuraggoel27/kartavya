const authenticationCheck = (req,res,next)=>{
    const user = req.user;
    if(!user){
        res.status(401).json({success: false,msg:"You need to login first"});
    }
    else{

        next();
    }
}
module.exports = authenticationCheck;