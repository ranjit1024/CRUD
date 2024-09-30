const {User} = require('../db');

function userMidlleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username:username,
        password:password,

    }).then(value => {
        if(value){
            next()
        }else{
            res.status(403).res.json({
                msg:"user Not found"
            })
        }
    })
}
module.exports = userMidlleware;