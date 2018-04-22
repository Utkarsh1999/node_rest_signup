const mysql = require('../db');
const mysqlPool = mysql.createPool();

//define logout operation
var logout = function(){};

logout.prototype.logoutUser = function(req,res,callback){
    var sess = req.session.user;
    if(sess)
    {
        req.session.user = null;
        return callback(null, 
        {
            'success' : true,
            "message" : "user logout successfully"
        });
    }

    callback(null , {
        'success' : true,
        "message" : "user logout successfully"
    });
}


module.exports = new logout();