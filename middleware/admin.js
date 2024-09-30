
const {Admin} = require("../db");
console.log(Admin);

function adminMiddleWare(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"admin does not exists"
            })
        }
    })

}
module.exports = adminMiddleWare; 