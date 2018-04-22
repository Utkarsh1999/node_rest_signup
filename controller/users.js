const express = require('express');
const router = express.Router();
const signup = require('../models/users/login.js');
const signout = require('../models/users/logout.js');

router.post('/login',function(req,res){
    login.loginUser(req,res,function(err,data){
        if(err)
        {
            res.json({
                'error' : true,
                'message' : 'error in logged in'
                
            });
        }
        else{
            res.json({
                'success' : true,
                'data' : data
            });
        }
    });
});


//for logout 
router.post('/logout',function(req,res){
    login.logoutUser(req,res,function(err,data){
        if(err)
        {
            res.json({
                'error' : data.error,
                'message' : data.message
                
            });
        }
        else{
            res.json({
                'success' : data.success,
                'message' : data.message
            });
        }
    });
});

module.exports = router;