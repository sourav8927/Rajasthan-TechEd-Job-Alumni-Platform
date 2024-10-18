const mongoose=require("mongoose");
const { ObjectId } = require('mongodb'); 

const jobsCollection = mongoose.connection.collection('postedJobs');

const getAllJobs= async(req,res)=>{
 const jobs= await jobsCollection.find({}).toArray();
 res.send(jobs);
};
const postJobs=async(req,res)=>{
    const body= req.body;
    body.createAt=new Date();

    const results= await jobsCollection.insertOne(body);
    if(results.insertedId){
        return res.status(200).send(results);
    }else{
        return res.status(404).json({msg:"can't insert data please try again"})
    }
}

const getJobById= async(req,res,next)=>{
    const id=req.params.id;
    const job = await jobsCollection.findOne({
        _id: new ObjectId(id)
    })

    res.send(job);
}
module.exports={getAllJobs,postJobs,getJobById}