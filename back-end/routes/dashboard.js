const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const {protect} = require('../middleware/authmiddleware');
const {createPost,deletePost,getAllPost} = require('../controllers/postController');

router.get('/home',protect,getAllPost);

router.post('/upload',protect,upload.single("image"),createPost);

router.delete('/:id',protect,deletePost);

module.exports = router;