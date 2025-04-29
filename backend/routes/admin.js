
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
   const {price,title,description,creatorId,imageUrl} = req.body;
   const course = await courseModel.create({
    price:price,
    title:title,
    description: description,
    creatorId: adminId,
    imageUrl: imageUrl
   })
   res.json({
    message: "course-created",
    courseId: course._id
   })
})

adminRouter.put("/course",adminMiddleware,async function(req,res){
const adminId = req.adminId;
const {price,title,description,courseId,imageUrl} = req.body;
 const course = await courseModel.updateOne({
    _id:courseId,
     creatorId: adminId
    },{
        title: title,
        description,description,
        price: price,
        imageUrl: imageUrl
    })

    res.json({
        message:"Course_updated",
        courseId:course._id
    })
})

adminRouter.get("/course/all",adminMiddleware,async function(req,res){
const adminId= req.adminId;
const course = await courseModel.find({
    creatorId:adminId
})
res.json({
    message: "All courses are here",
    course
})
})

module.exports = {
    adminRouter
}