const express= require("express");
const router = express.Router();

const userMidlleware = require("../middleware/user");

router.post("/singup", (req, res)=>{

});

router.get('/courses', (req,res)=>{

});

router.post("/courses/:courseId", userMidlleware, (req, res)=>{

});

module.exports = router;