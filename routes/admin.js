const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require('../index')

const router = express.Router();
console.log(JWT_SECRET);


router.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created successfully"
    })
});

router.post("/signin", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username,
        password
    })
    
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
    
        res.json({
            token
        })
    }
    else{
        res.status(411).res.json({
            msg:"Admin Does not exists"
        })
    }
})


router.post('/course', adminMiddleware, async (req, res)=>{
    const title = req.body.title;
    const descripition = req.body.desripition;
    const imageLink = req.body.imageLink;
    const price = req.body.price

    const newCourse = await Course.create({
        title:title,
        descripition:descripition,
        imageLink:imageLink,
        price:price
    })
    
    res.json({
        message:"course created successfully",courseId:newCourse._id
    })
    
});

router.get("/courses", adminMiddleware,async (req, res)=>{
   const response = await Course.find({});
   res.json({
    curses:response
   })
});

module.exports = router;

