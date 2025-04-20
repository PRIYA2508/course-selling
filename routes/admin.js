const {Router} = require("express");

const adminRouter = Router();

const {adminModel} = require("../db/db")

adminRouter.post("/signin",async function(req,res){
    const {firstName,lastName,email,password} = req.body;
   try{
    await adminModel.create({
    firstName,
    lastName,
    email,
    password
})

res.json({
    message: "Signin Successfully",
})
} catch(error){
    res.status(500).json({
        message: "An error occured during signin",
        error: error.message
    })
}
        
})

adminRouter.post("/signup",function(req,res){}
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