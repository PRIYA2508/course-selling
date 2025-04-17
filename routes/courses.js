const {Router} = require("express")

const courseRouter = Router()
    courseRouter.post("/purchase" ,(req,res)=>{
        res.json({
            message: "course purchasing successfully"  
        })
    })
    
    courseRouter.get("/preview",(req,res)=>{
        res.json({
        message: "our purchased courses"
        })
    })
      

module.exports ={
    courseRouter
}