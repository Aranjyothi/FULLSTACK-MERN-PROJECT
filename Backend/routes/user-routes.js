const express = require('express');
const { verify } = require('jsonwebtoken');
const { signup, login, verifyToken, getUser } = require('../controller/user-controller');
const router = express.Router();


router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyToken,getUser)
//verify token

router.get('/user')

// router.get('/',(req,res, next)=>{
//     res.send("hello1")
// })
module.exports =router