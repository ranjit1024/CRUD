const {User} = require('../db');

async function userMidlleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    const findUserData = await User.findOne({username:username, password:password});
    if(findUserData){
        next();
    }else{
        res.status(403).json({
            msg:"User does not exists"
        })
    }
}
module.exports = userMidlleware;