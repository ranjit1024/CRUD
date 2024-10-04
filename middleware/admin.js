const secrect = require("../index");
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodeValue = jwt.verify(jwtToken, secrect);
    if(decodeValue.username){
        next();
    }
    else{
        res.send(403).json({
            msg:"You are not autorized to login as admin"
        })
    }
}
module.exports = adminMiddleware;
 