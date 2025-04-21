const {Router} = require("express");
const userRouter = Router();
const {userModel} = require("../db/db")
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")

userRouter.post("/signup",async(req,res)=>{
    const {firstName,lastName,email,password} = req.body;
    try{await userModel.create({
        firstName,
        lastName,
        email,
        password
    })
    res.json({
        message:"Sign-up successfully"
    })
}
catch(error){
    res.status(404).json({
        message: error.message
    })
}
})
userRouter.post("/signin",async(req,res)=>{
    const {email,password} = req.body;

    const user = await userModel.findOne({
        email,
        password
    })
    if(user){
        const token = jwt.sign({
           id: user._id
        },JWT_USER_PASSWORD) 
        res.json({
            token: token
        })
    }else{
    res.json({
        message:"Credentials are not valid"
    })
}
})

userRouter.post("n /purchases", function(req,res){
    res.json({
       message: "purchase history"
    })

})


module.exports={
    userRouter: userRouter
}