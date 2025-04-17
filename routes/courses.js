const {Router} = require("express")

const courseRouter = Router()
    courseRouter.post("/course/purchase" ,(req,res)=>{
        res.json({
            message: "course purchasing successfully"  
        })
    })
    
    courseRouter.get("/course/preview",(req,res)=>{
        res.json({
        message: "our purchased courses"
        })
    })
      

module.exports ={
    createCoursesRoutes
}