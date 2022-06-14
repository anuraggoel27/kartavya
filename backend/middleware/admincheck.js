const adminCheck = (req,res,next)=>{
    const isAdmin = req.user.isAdmin;
    if(!isAdmin){
        res.status(401).json({success:false, msg:"Please login with an Admin account"});
    }
    else{
        next();
    }
}

module.exports = adminCheck;