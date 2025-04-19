const express = require("express");
const mongoose = require("mongoose");
const {userRouter}  = require("./routes/user");   
const { courseRouter} = require("./routes/courses");
const {adminRouter} = require("./routes/admin")
const app = express();

app.use("/user", userRouter);
app.use("/course" , courseRouter);
app.use("/admin",adminRouter);

async function main(){
    await  mongoose.connect("mongodb+srv://siserjuliet31:ShowPassword@cluster0.sqijbpl.mongodb.net/coursera-app");
    console.log("Connected to MongoDB");
    app.listen(3000)
}
main();


