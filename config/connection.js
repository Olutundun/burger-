require("dotenv").config();
var keys = require("../keys")
var mysql = require("mysql");

//var password = keys.mysql.password;
var connection;
// mysql connection 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hacktheplanet',
  database: 'todoagain_db' 
});
};
connection.connect();
module.exports = connection;

