require('dotenv').config();
const express= require("express");
const cors=require("cors");
const app=express();
// const {createServer}=require('node:http');
const authRouter = require("./router/auth-router");
const contactRouter=require("./router/contact-router");
const serviceRouter= require("./router/service-router");
const adminRouter=require("./router/admin-router");
const jobRoute=require("./router/job-route");

//mongodb connection
const connectDb= require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

app.use(cors());
app.use(express.json());
//routes
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/services",serviceRouter);
app.use("/api/admin",adminRouter);
app.use("/api/jobs",jobRoute);

//calling error middleware
app.use(errorMiddleware);


const PORT=process.env.PORT || 3000;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port :${PORT}`);
    });

});