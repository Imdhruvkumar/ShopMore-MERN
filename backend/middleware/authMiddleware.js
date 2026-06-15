const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

const protect = async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        console.log("Authorization:", req.headers.authorization);
console.log("User:", req.user);
        next();
    } catch (error) {
        res.status(401).json({message:"not authorised,token failed"});
    }
}
if(!token){
     res.status(401).json({message:"not authorised, no token"});
}
};

module.exports = {protect};
