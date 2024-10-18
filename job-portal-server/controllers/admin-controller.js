const User=require("../models/user-model");
const Contact= require("../models/contact-model");

const getAllUsers= async(req,res,next)=>{
    try {
        const users= await User.find({},{password:0});
        res.status(200).json({users});
        console.log(users);
        if(!users || users.length===0){
            res.status(404).send("no user found");
        }
    } catch (error) {
        console.log("no user found");
       next(error);
    }
}

const getAllContacts= async(req,res,next)=>{
    try {
        const contacts= await Contact.find();
        res.status(200).json({contacts});
        console.log(contacts);
        if(!contacts || contacts.length===0){
            res.status(404).send("no user found");
        }
    } catch (error) {
        console.log("no user found");
       next(error);
    }
}

const deleteUser= async(req,res,next)=>{
    const id= req.params.id;
    let user;
    try {
        user= await User.findByIdAndDelete(id);
        if(!user){
            res.status(404).json({message:" user doesnt exists"});
        }
        console.log(id);
        res.status(200).json({message: "user deleted successfully"});
    } catch (error) {
        console.log("no user found");
       next(error);
    }
}

const getUserById= async(req,res,next)=>{
   try {
    const id=req.params.id;
    const user= await User.findById(id,{password:0});
    res.status(200).json({user});
    console.log(user);
    if(!user){
        res.status(404).send("no user found");
    }
   } catch (error) {
    console.log(error);
    next(error);
   }
}

const updateUser= async(req,res,next)=>{
    try {
        const id= req.params.id;
        const {username,email,phone}= req.body;
        console.log("reqbody",req.body)
        const updatedData= await User.findByIdAndUpdate(id,{
            username,
            email,
            phone,
        },
        { new: true }
    );
        console.log( "Updated user",updatedData);
        if (updatedData) {
            return res.status(200).json({ updatedData });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports={getAllUsers,getAllContacts,deleteUser,getUserById,updateUser};