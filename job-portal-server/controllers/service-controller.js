const Service=require("../models/service-model");
const services= async(req,res)=>{
    try {
        const response= await Service.find();
        if(!response){
            res.status(404).json({response:"No service found"});
            return;
        }
        res.status(200).json({response });
    } catch (error) {
        console.log("service:",error);
    }
}

module.exports={services}