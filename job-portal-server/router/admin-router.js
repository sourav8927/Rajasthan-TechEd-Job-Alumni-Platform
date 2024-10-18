const express= require("express");
const router= express.Router();
const adminController= require("../controllers/admin-controller");
const authmiddleware=require("../middlewares/auth-middleware");
const adminMiddleware= require("../middlewares/admin-middleware");

router.route("/users").get(authmiddleware,adminMiddleware,adminController.getAllUsers);
router.route("/contacts").get(authmiddleware,adminMiddleware,adminController.getAllContacts);
router.route("/users/delete/:id").delete(authmiddleware,adminMiddleware,adminController.deleteUser);
router.route("/users/:id").get(authmiddleware,adminMiddleware,adminController.getUserById);
router.route("/users/update/:id").patch(authmiddleware,adminMiddleware,adminController.updateUser);
module.exports=router;