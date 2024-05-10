const express = require('express');
const app = express();
const cors = require("cors")


 const port = 5000;

 const UserRouter = require("./router/userRouter")
 const CompanyRouter = require("./router/companyRouter")
 const VacancyRouter = require("./router/vacancyRouter")
 const UtilRouter = require("./router/utilRouter")
 const ContactRouter = require("./router/contactRouter")
 const FeedbackRouter = require("./router/feedbackRouter")


 app.use(express.json());
 app.use(cors({
    origin:["http://localhost:3000"]
 }))  

 app.use("/user", UserRouter);
 app.use("/company", CompanyRouter);
 app.use("/vacancy", VacancyRouter);
 app.use("/util", UtilRouter);
 app.use("/contact", ContactRouter);
 app.use("/feedback", FeedbackRouter);


 app.listen(port,() => {
    console.log("Server Started");
 })