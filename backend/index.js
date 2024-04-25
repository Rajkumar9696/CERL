const express = require('express');
const app = express();
const cors = require("cors")


 const port = 5000;

 const UserRouter = require("./router/userRouter")

 app.use(express.json());
 app.use(cors({
    origin:["http://localhost:3000"]
 }))  

 app.use("/user", UserRouter);

 app.listen(port,() => {
    console.log("Server Started");
 })