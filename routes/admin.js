
const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db/db")
const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "asyncpassword"

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

adminRouter.post("/course",function(req,res){

})

adminRouter.put("/course",function(req,res){

})

adminRouter.get("/course/all",function(req,res){

})

module.exports = {
    adminRouter
}