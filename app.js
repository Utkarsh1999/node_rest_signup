const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./models/db.js');
//const controllers = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

if(global.SQLpool === undefined)
{
    global.SQLpool = mysql.createPool();//create a global sql pool to connect mutitple use at same time
    
}

app.use(controllers);
// app.listen(port,function(){
//     console.log("connected to port : "+port);
// })
module.exports = app;