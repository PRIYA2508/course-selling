const express = require("express");
const app = express();

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"User created successfully"
    })
})
app.post("/user/signin",(req,res)=>{
    res.json({
        message:"User logged in successfully"
    })
})

app.post("/users/purchases", function(req,res){
    res.json({
       message: "purchase history"
    })

})

app.post("/user/purchase" ,(req,res)=>{
    res.json({
        message: "course purchasing successfully"  
    })
})

app.get("/courses",(req,res)=>{
    res.json({

    })
})
 
app.listen(3000)