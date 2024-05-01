const express = require('express');
const app = express();
const cors = require("cors")


 const port = 5000;

 const UserRouter = require("./router/userRouter")
 const CompanyRouter = require("./router/companyRouter")
 const VacancyRouter = require("./router/vacancyRouter")
 


 app.use(express.json());
 app.use(cors({
    origin:["http://localhost:3000"]
 }))  

 app.use("/user", UserRouter);
 app.use("/company", CompanyRouter);
 app.use("/vacancy", VacancyRouter);

 app.listen(port,() => {
    console.log("Server Started");
 })