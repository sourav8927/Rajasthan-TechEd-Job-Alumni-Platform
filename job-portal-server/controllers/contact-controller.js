const Contact= require("../models/contact-model");

const contactForm= async(req,res)=>{
    try {
        console.log(req.body);
        const response= req.body;
        await Contact.create(response);
        // return res.status(200).json(req.body);
         return res.status(200).json({msg: "message sent successfully"});
        
    } catch (error) {
        res.status(400).json({message:" message not delivered"});
    }
};

module.exports=contactForm;