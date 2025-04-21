const {Router} = require("express");

const userRouter = Router();
const {userModel} = require("../db/db")
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
userRouter.post("/signin",(req,res)=>{
    res.json({
        message:"User logged in successfully"
    })
})

userRouter.post("n /purchases", function(req,res){
    res.json({
       message: "purchase history"
    })

})


module.exports={
    userRouter: userRouter
}