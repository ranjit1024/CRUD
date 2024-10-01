
const {Admin} = require("../db");


async function adminMiddleWare(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username, password)
    const findData = await Admin.findOne({username:username,password:password});
    console.log(findData)
    if(findData){
        console.log("this is working");
        next();
    }
    else{
        res.status(403).json({
            msg:"admin does not exists"
        })
    }
    // .then(function(value){
    //     if(value){
    //         console.log(value)
    //         next();
    //     }else{
    //         console.log(value)
    //         res.status(403).json({
    //             msg:"admin does not exists"
    //         })
    //     }
    // })

}
module.exports = adminMiddleWare; 