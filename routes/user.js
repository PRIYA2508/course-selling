const {Router} = require("express");

const userRouter = Router();
userRouter.post("/signup",(req,res)=>{
    res.json({
        message:"User created successfully"
    })
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