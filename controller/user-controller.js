const User = require('../model/User')

const info = async (req, res) => {
    // req.params.username
    // req.userId
    console.log('made it to our route!')
    console.log('user id:', req.userId)
    try {
        const foundUser = await User.findById(req.userId)
        
        res.status(200).json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const allUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }   
}

const clear = async (req, res) => {
    try {
        await User.deleteMany({})
        res.status(200).json({ msg: 'All users have been deleted '})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    info,
    allUsers,
    clear
}



// const User = require("../model/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { prettyDOM } = require("@testing-library/react");
// const JWT_SECRET_KEY = "helloKey";

// const signup = async (req, res, next) => {
//   console.log(1);
//   const { name, email, password } = req.body;
//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email: email });
//   } catch (err) {
//     console.log(err);
//   }
//   if (existingUser) {
//     return res.status(400).json({ message: "user already exist login insted" });
//   }
//   const hashedPassword = bcrypt.hashSync(password);
//   const user = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });
//   try {
//     await user.save();
//   } catch (error) {
//     console.log(error);
//   }
//   return res.status(200).json({ message: user });
// };

// const login = async (req, res, next) => {
//   const { email, password } = req.body;

//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email: email });
//   } catch (err) {
//     return new Error(err);
//   }
//   if (!existingUser) {
//     return res.status(400).json({ message: "user not found. Signup please" });
//   }
//   const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
//   if (!isPasswordCorrect) {
//     return res.status(400).json({ message: "Invalid email/password" });
//   }
//   const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: "1d",
//   });

// // if(req.cookie[`${existingUser._id}`]){
// //   req.cookies[`${existingUser._id}`]
// // }

//   // res.cookie(String(existingUser._id),token,{
//   //   path: '/',
//   //   expires: new Date(Date.now() + 1000 *30),
//   //   httpOnly:true,
//   //   sameSite:"lax"
//   // })

//   return res
//     .status(200)
//     .json({ message: "welcome", user: existingUser, token });
// };
// const verifyToken = (req, res, next) => {
//   console.log(1)
//    const cookies = req.headers.authorization.replace("Bearer ", "")

// console.log(cookies)
 
//   const token = cookies;
//   if (!token) {
//     res.status(404).json({ message: "no token found" });
//   }
//   jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
//     if (err) {
//       res.status(400).json({ message: "invalid token" });
//     }
//     console.log(user.id);
//     req.id = user.id
//   });
//   next()
// };
//   const getUser = async(req,res,next) =>{
//     const userId = req.id
//     let user;
//     try{
//         user = await User.findById(userId,'-password')
//     }catch(err){
//         return new Error(err)
//     }
//     if(!user){
//         return res.status(404).json({message:"user not found"})
//     }
//     return res.status(200).json({user})
//   }
  
// exports.signup = signup;
// exports.login = login;
// exports.verifyToken = verifyToken;
// exports.getUser = getUser;

