const adminCheck = (req,res,next)=>{
    const isAdmin = req.user.isAdmin;
    if(!isAdmin){
        res.status(403).json({success:false, msg:"Please login with an Admin account"});
    }
    else{
        console.log('admincheck passed');
        next();
    }
}

module.exports = adminCheck;