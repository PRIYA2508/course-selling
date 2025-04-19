const {Router} = require("express");

const adminRouter = Router();

const {adminModel} = require("../db/db")

adminRouter.post("/signin",function(req,res){

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