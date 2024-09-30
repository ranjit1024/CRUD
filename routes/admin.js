const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();

router.post('/signup', (req, res)=>{
    res.send("this is good");
})

router.post('/course', adminMiddleware, (req, res)=>{
    
});

router.get("/courses", adminMiddleware,(req, res)=>{
    res.send("working");
});
module.exports = router;

