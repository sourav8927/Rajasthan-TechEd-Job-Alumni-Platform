const adminMiddleware= async(req,res,next)=>{
    try {
        const adminRole= req.user.isAdmin;
        if(!adminRole){
            res.status(403).json({message:"Access denied user is not an Admin"});
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports=adminMiddleware;