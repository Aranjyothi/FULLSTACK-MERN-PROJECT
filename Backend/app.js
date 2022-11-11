const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    "mongodb+srv://Aranjyothi:admin@cluster0.p45whfj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080);
    console.log("Database is connected! Listening to localhost 8080");
  })
  .catch((err) => console.log(err));

// const app = express()
// app.use('/api',(req,res,next) => {
//     res.send("hello")
// })
// app.listen(8080,()=>{
//     console.log("listening port")
// })
