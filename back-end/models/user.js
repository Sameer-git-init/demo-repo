const mongoose = require('mongoose');

const User = new mongoose.Schema({
     firstname :{
          type : String,
          required : [true,'please add a firstname'],
     },
     lastname :{
          type : String,
          required : [true,'please add a lastname'],
     },
     email:{
          type:String,
          unique : true,
          required : [true,'please add an email'],
     },
     password :{
          type : String,
          required : [true,'please add a password'],
     },
     loaction : String,
     bio : String,
},{timestamps:true});

module.exports = mongoose.model('User',User)