const express= require("express");
const router = express.Router();

const { User,Course } = require("../db");
const userMidlleware = require("../middleware/user");

router.post("/signup", (req, res)=>{
    const userName = req.headers.username;
    const password = req.headers.password;
    User.create({
        username:userName,
        password:password,
    })
    res.json({
        msg:"user created successfully"
    })
});

router.get('/courses', async (req,res)=>{
    const response = await Course.find({})
    console.log(response);
    res.json({
        course:response
    })
});

router.post("/courses/:courseId",  userMidlleware,async (req, res)=>{
   const courseId = req.params.courseId;
   const username = req.headers.username;

   User.updateOne({
    username:username
   },{
    "$push":{
        purchesdCourses:courseId
    }
   }).catch(e=>console.log(e))

   res.json({
    message:"Purchase Complete"
   })
});

router.get("/purchesedCourses", userMidlleware,  async (req, res)=>{
    const username = req.headers.username;
    const user = await User.findOne({
        username:username
    })

    const course = await Course.find({
        _id:{
            "$in":user.purchesdCourses
        }
    })

    res.json({
        course:course
    })
});
module.exports = router;

