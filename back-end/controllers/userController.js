const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// get all users develop mode only GET /api/users/ 
const getAllUser = async(req,res)=>{
     const user = await User.find({}).sort({createdAt: -1});
     res.json(user);
}
// get the user GET /api/users/:id
const getUser = async(req,res)=>{
     const {id} = req.params;

     const user = await User.findById(id);
     if(!user){
          return res.status(400).json({msg : "No user found"})
     }
     
     res.status(200).json(user);
     
}

// create or register user POST /api/users/register
const createUser = async (req, res)=>{
     const {firstname, lastname, email, password,location,bio} = req.body;  
     // check if user exists
     const userExists = await User.findOne({email});
     if(userExists){
          res.status(400)
          throw new Error('User already exists');
     }
     // Hash password
     const salt = await bcrypt.genSalt(10);
     const hashedpassword = await bcrypt.hash(password,salt);
     const user = await User.create({firstname, lastname, email, password:hashedpassword,location,bio});
     if(user){
               res.status(201).json({
                    _id : user.id,
                    name : user.firstname,
                    email : user.email,
                    token : generateToken(user._id),
               })
          }
     else {
          res.status(400).json({ message : 'Invalid user data'})
     }
}
// update user PATCH /api/users/:id
const updateUser = async(req,res)=>{
     const {id} = req.params;
     const user = await User.findByIdAndUpdate({_id:id},{ 
          firstname,
          lastname,
          password,
          location,
          bio,        
     })
     if(!user){
          return res.status(400).json({msg : "No user found"})
     }
     
     res.status(200).json(user);
}

//Login user

const loginUser = async(req,res)=>{
     const {email,password} = req.body;
     // check if email exists
     const emailExists = await User.findOne({email});
     if(emailExists && (await bcrypt.compare(password,emailExists.password))){
          res.status(201).json({
               _id : emailExists.id,
               name : emailExists.firstname,
               email : emailExists.email,
               token : generateToken(emailExists._id),
          })
     } else {
          res.status(400)
          throw new Error("email doesn't exist");
          
     }

}
// delete user
const deleteUser = async(req,res)=>{
     const {id} = req.params;
     const user = await User.findOneAndDelete({_id:id});
     if(!user){
          return res.status(400).json({msg:" No user"});
     }
     res.status(200).json(user);
}

// generating token

const generateToken = (id)=>{
     return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}

module.exports = {
     createUser,
     getUser,
     getAllUser,
     deleteUser,
     updateUser,
     loginUser,
}