const User = require('../model/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail.js');
const generateToken = (id)=>{
    return jwt.sign({id},proccess.env.JWT_SECRET,{expiresIn:'30d'});
};
const registerUser = async(req,res) =>{
    const {name,email,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'user already exist'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);


        const user = User.create({name,email,password:hashPassword});

        if(user){
            const otp = Math.floor(100000 + Math.random() *900000).toString();
            const message = `  welcome to shopmore,${name}!
            your otp for shopmore registration is :${otp}`;
            await sendEmail(email,"welcome to shopmore- your OTP for registration ",message);
            return res.status(200).json(
            {
              _id:user._id,
              name:user.name,
              email:user.email,
              role:user.role,
              token:generateToken(user._id) 
            });
        }
        else{
            return res.status(500).json({message:'invalid user data'});
        }
    }
    catch (error) {
        return res.status(500).json({message:'server error'});
        
    }
}

const loginUser = async(req,res)=>{
   const { email,passwors} = req.body;
   try {
        const user = await User.find({email});
        if(user && await bcrypt.compare(password,user.password)){
            res.json({
                _id: user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            })
        }
        else{
            res.status(400),json({message:'inavlid email or password'});
        }
     } 
     catch (error) {
        res.status(500).json({message:'server error'});
     }
}

const getUsers = async(req,res)=>{
    try {
        const users =  await User.find({}).select("-password");
        res.json(users);
    } catch (error) {
        res.status(501).json({message:"server error"})
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUsers
};