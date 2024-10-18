const mongoose=require("mongoose");

const URI= process.env.MONGODB_DATABASE_URI;
const connectDb= async()=>{
    try {
       await mongoose.connect(URI);
       console.log("connection successful with database");
    } catch (error) {
        console.error("database connection failed ");
        process.exit(0);
    }
};

module.exports= connectDb;

