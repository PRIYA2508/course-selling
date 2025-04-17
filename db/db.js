const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectID = Schema.ObjectId;

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
creatorId: ObjectID
})

const purchaseSchema = new Schema({
title:String,
userId:ObjectID,
courseId:ObjectID,
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