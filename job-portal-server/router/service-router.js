const express= require("express");
const router=express.Router();
const serviceController=require("../controllers/service-controller");

router.route("/").get(serviceController.services);

module.exports=router;