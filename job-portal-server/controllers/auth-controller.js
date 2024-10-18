const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is the home page using controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log("register :",req.body);
    const { username, email, phone, password } = req.body;
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.phone);
    
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    // const salt=10;
    // const hash_pass= await bcrypt.hash(password,salt);
    const userCreated = await User.create({ 
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({ msg:"Registration successfully",token: await userCreated.generateToken(),userId: userCreated._id.toString(),});
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

const login= async (req,res)=>{
  try {
    console.log(req.body);
    const {email,password} =req.body;
    const userExist= await User.findOne({email});
    if(!userExist){
      return res.status(401).json({message:"Invalid credentials"});
    }
    // const user= await bcrypt.compare(password,userExist.password);

    const user= await userExist.comparePassword(password);
    
    if(user){
      res.status(200).json({message:"Login successfully",token: await userExist.generateToken(),userId: userExist._id.toString()});
    }else{
      res.status(401).json({message:"Invalid email or password"});
    }
  } catch (error) {
    res.status(500).json({message:"Internal server error"});
  }
};

//For sending user data 
const user=async(req,res)=>{
  try {
    const userData= req.user;
    console.log("data from auth controller user",userData);
    res.status(200).json({userData});
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
 
}
module.exports = { home, register,login,user };
