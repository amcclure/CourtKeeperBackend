const mysql = require('mysql');

var devConnect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'electionBuddy'
  });

var currentConnection = devConnect;

exports.useDevDB = function(){
    currentConnection = devConnect;
}

exports.query = function(query, queryFunction){
    currentConnection.query(query,queryFunction);
  }

exports.connection = currentConnection;