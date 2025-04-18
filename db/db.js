const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
mongoose.connect("mongodb+srv://siserjuliet31:Showpassword@cluster0.sqijbpl.mongodb.net/coursera-app")

const userSchema = new Schema({
email: {type: String , unique:true},
password: String,
firstName: String,
lastName: String,
})

const adminSchema = new Schema({
email:{type:String , unique:true},
password: String,
firstName: String,
lastName: String,
})

const courseSchema = new Schema({
title:String,
description:String,
price:Number,
imageUrl: String,
creatorId: ObjectId
})

const purchaseSchema = new Schema({
title:String,
userId:ObjectId,
courseId:ObjectId,
price:Number,
description:String
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports ={
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}