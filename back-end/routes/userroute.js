const express = require('express');
const {createUser,getUser,getAllUser,deleteUser,updateUser,loginUser} = require('../controllers/userController');
const router = express.Router();

router.get('/',getAllUser);

router.get('/:id',getUser);

router.post('/register',createUser);

router.post('/login',loginUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

module.exports = router;