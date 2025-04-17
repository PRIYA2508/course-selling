const express = require("express");
const {userRouter}  = require("./routes/user");   
import { createCoursesRoutes } from "./routes/courses";
const app = express();

app.use("/user", userRouter);
app.use("/course" , courseRouter);

createUserRoutes(app);
createCoursesRoutes(app);

app.listen(3000)