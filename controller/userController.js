const User = require('../models/user');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();
const userController = {
register: async(req,res) => {
  try {
   const {username , email , password } = req.body;
   const user = await User.findOne({ email });
   if(user){
    return res.status(400).json({message: "User already exist"});
   }
   const hashedPassword =  await bcrypt.hash(password,10);
   const newUser = new User({
    username,
    email,
    password:hashedPassword
   });
   await newUser.save();
   res.status(201).json({message:"User registered Successfully"});
  }catch(error){
    res.status(500).json({ message: error.message });
  }
},
login: async(req,res) => {
  try {
    const { email, password } = req.body;
    const user= await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"User does not exist"});
    }
    const isPassword= await bcrypt.compare(password,user.password);
    if(!isPassword){
      return res.status(400).json({message:"Invalid Credentials"});
    }

   const token=jwt.sign({userId: user._id},process.env.JWT_SECRET);
   res.status(200).json({message:"User Logged in Successfully",token});
  }catch(error){
    res.status(500).json({ message: error.message });
  }
},
logout: async (req, res) => {
  try {
  
    res.clearCookie('token');
     res.status(200).json({message:"user logged out successfully"});
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
},
myProfile: async ( req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select('-__v -password');
    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
}
module.exports = userController;