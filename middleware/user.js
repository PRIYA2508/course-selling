const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");

function userMiddleware(){
const token = req.headers.token;
const decoded = jwt.verify(token , JWT_USER_PASSWORD);

if(decoded){
    req.userId = decoded.id;
    next();
}
else{
    res.status(404).json({
        message: "You are not Sign-in"
    })
}
}

module.exports ={
    userMiddleware
}