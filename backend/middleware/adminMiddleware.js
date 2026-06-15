const admin= (req,res,next)=>{
    console.log(req.user);
    if(req.user  && req.user.role==='admin'){
        next();
    }else{
       return res.status(401).json({message:'Access denied, admin only'});
    }
};

module.exports = admin;