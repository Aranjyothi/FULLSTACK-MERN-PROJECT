const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user-controller')

router.get('/info', userCtrl.info)
router.delete('/clear', userCtrl.clear)
router.get('/all', userCtrl.allUsers)

module.exports = router




// const express = require('express');
// const { verify } = require('jsonwebtoken');
// const { signup, login, verifyToken, getUser, refreshToken } = require('../controller/user-controller');
// const router = express.Router();


// router.post("/signup",signup)
// router.post("/login",login)
// router.get("/user",verifyToken,getUser)
// // router.get("/refresh",refreshToken,verifyToken,getUser)
// //verify token

// router.get('/user')

// // router.get('/',(req,res, next)=>{
// //     res.send("hello1")
// // })
// module.exports =router