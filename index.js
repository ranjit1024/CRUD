const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const env = require("dotenv").config({path:"./port.env"});

const port = process.env.PORT || 3000;
const app = express();

const JWT_SECRET = "ranjit-server";

app.use(bodyParser.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port, ()=>{
    console.log(`listing on port numenbr ${port}`);
})

module.exports = JWT_SECRET;