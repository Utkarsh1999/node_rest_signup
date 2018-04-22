var mysql = require('mysql');
var config = require('../config.json');
const db = mysql.createPool({
	host: config.host,
	user: config.user,
	password: config.password,
	connectionLimit : 100,
	multipleStatements:true
});
	
exports.connection = db;