const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.post('/signup', (req, res)=>{
    res.send("this is good");
})

router.post('/course', adminMiddleware, (req, res)=>{
    
});

router.get("/couses", adminMiddleware,(req, res)=>{

});
module.exports = router;

