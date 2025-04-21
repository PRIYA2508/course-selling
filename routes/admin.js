
const {Router} = require("express");
const adminRouter = Router();
const {adminModel,courseModel} = require("../db/db")
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require("../config")
const {adminMiddleware} = require("../middleware/admin")

adminRouter.post("/signup",async function(req,res){
    const {firstName,lastName,email,password} = req.body;
   try{
    await adminModel.create({
    firstName,
    lastName,
    email,
    password
})

res.json({
    message: "Signup Successfully",
})
} catch(error){
    res.status(500).json({
        message: "An error occured during signin",
        error: error.message
    })
}
        
})

adminRouter.post("/signin",async function(req,res){
    const{email,password} = req.body;

    const admin = await adminModel.findOne({
        email,
        password
    })
    if(admin){
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
    
}
)

adminRouter.post("/course",adminMiddleware,async function(req,res){
   const adminId = req.adminId;
   const { title, description, duration , imageUrl } = req.body;

   const course  = await courseModel.create({
    title, description, duration , imageUrl
   })
   res.json({
    message: "Course created",
    courseId: course._id
})
})

adminRouter.put("/course",function(req,res){

})

adminRouter.get("/course/all",function(req,res){

})

module.exports = {
    adminRouter
}