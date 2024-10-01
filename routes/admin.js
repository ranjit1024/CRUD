const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = express.Router();

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

router.get("/courses", adminMiddleware,(req, res)=>{
    res.send("working");
});
module.exports = router;

