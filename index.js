const express = require("express");
const app = express();

app.get("/first",(req,res)=>{
    res.send("First commit");
})
app.listen(3000)