const mysql = require('mysql');

var connection = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  //port: '3306',
  user: 'root',
  password: 'password',
  database: 'electionBuddy'
});

var devConnect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'electionBuddy'
  });

//var currentConnection = devConnect;
var currentConnection = connection;

exports.useDevDB = function(){
    //currentConnection = devConnect;
    currentConnection = connection;
}

exports.query = function(query, queryFunction){
    currentConnection.query(query,queryFunction);
  }

exports.connection = currentConnection;