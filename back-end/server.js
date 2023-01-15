require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const dashboard = require('./routes/dashboard');
const userRoute = require('./routes/userroute');

const mongoose = require('mongoose');

// mongodb connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to mongo and listening to port 2000!!");
    });
 })
 .catch((e)=>{
    console.log(e)
 });
 
const app = express();

 // middleware
 app.use(bodyParser.json());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
 });
 
 // routes
app.use('/api/dashboard',dashboard);
app.use('/api/user',userRoute);



