const Post = require('../models/post');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');


// POST /api/dashboard/upload 
const createPost = async(req,res)=>{
     try{
          console.log(typeof(req.file.path));
          const result = await cloudinary.uploader.upload(req.file.path);
          let post = new Post({
               user : req.user.id,
               description : req.body.description,
               tag: req.body.tag,
               username: req.body.username,
               profile_img: result.secure_url,
               cloudinary_id: result.public_id
          });
          await post.save();
          res.status(200).json(post);
     }catch(e){
          console.log(e);
     }
}
// POST /api/dashboard/home protect 
const getAllPost = async(req,res)=>{
     try{
          const post = await Post.find({}).sort({createdAt:-1});
          if(!post){
               return res.status(400).json({msg : "No post"});
          }
          res.status(200).json(post);
     }catch(e){
          console.log(e);
     }
}
// POST /api/dashboard/ protect 
const deletePost = async(req,res)=>{
     try{
     const post = await Post.findById(req.params.id);
     await cloudinary.uploader.destroy(post.cloudinary_id);
     await Post.deleteOne();
     res.json(post);
     }catch(e){
          console.log(e);
     }
}

module.exports = {
     createPost,
     deletePost,
     getAllPost,
}