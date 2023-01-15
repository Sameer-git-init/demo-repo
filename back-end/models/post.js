const mongoose = require('mongoose');
const User = require('./user');

const Post = mongoose.Schema({
     user:{
          type: mongoose.Schema.Types.ObjectId,
          required : true,
          ref: 'User',  
     },
     description : {
          type : String,
     },
     tag : {
          type : String,
     },
     username : {
          type : String,
     },
     location : String,
     profile_img : String,
     cloudinary_id : String,
},{
     timestamps : true,
});

module.exports = mongoose.model('Post',Post)