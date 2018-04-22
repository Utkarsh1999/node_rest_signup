const mysql = require('../db');

const login = mysql.createPool();

let login = function(){};

login.prototype.loginUser = function(req,res,callback){
    var nowDate = new Date().toISOString().slice(0,19).replace('T',' ');
    var params = [req.body.email,req.body.password,1];
    var detailParams = [];
    var updateParams = [];
    var loginUserQuery = 'Select * from users where email = ? and password = ?';
    var getDetailQuery = 'select id,email,gender,lastLogin,name,role,state from users where id = ?';
    var updateLastloginTime = 'update users set lastLogin = ? where id = ?';
    mysqlPool.getConnection(function(err, connection){
        connection.query(loginUserQuery,params, function(err,rows,fields){
            if(rows.length <= 0)
            {
                connection.release();
                callback(true, null);
            }
            else
            {
                updateParams = [nowDate,rows[0].id];
                detailParams = [rows[0].id];
                req.session.user = rows[0];
                connection.query(updateLastloginTime,updateParams,function(err,rows,fields){
                    connection.query(getDetailQuery,detailParams, function(err,rows,fields){
                        connection.release();
                        callback(null,rows[0]);
                    });
                });
            }
        });
    });

}

module.exports = new login()