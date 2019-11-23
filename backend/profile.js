const mysqlConnection = require('./sqlfile.js');

//Gets the user
exports.getEmail = function(req,res){
    mysqlConnection.query("SELECT USER.email FROM USER WHERE USER.username = \'" + req.params.username + "\';",
                function(err, rows, fields){
                    if(err || rows.length == 0){
                        //logger.error(err.message);
                        res.send("<p1> No matching email address for that username");
                    }
                    res.send(rows[0]);
                });
}


//Gets the current user id
exports.getUserID = function(req,res){
    query = 'SELECT USER.user_id FROM USER WHERE USER.username = \'' + req.params.username + '\';';
    console.log(query);
    mysqlConnection.query('SELECT USER.user_id FROM USER WHERE USER.username = \'' + req.params.username + '\';',
                            function(err,rows,fields){
                                if(!err){
                                    if(rows[0]!= undefined){
                                        res.send(rows[0]);
                                    }
                                    else{
                                        res.send("<p1> id not Found </p1>")
                                    }
                                }
                                else{
                                    res.send("<p1> id not Found <p1>");
                                }
                            });
}





//Get user Info
exports.getUserInfo = function (req, res) {
    mysqlConnection.query("SELECT * FROM USER WHERE USER.username = \'" + req.params.username+ "\';",
        function (err, rows, fields) {
            if (rows[0] == undefined) {
                logger.error(err.message);
            }
            res.send(rows);
        });
}



exports.getUserName = function (req, res) {
    user_id = req.params.user_id;
    console.log(`SELECT USER.username FROM USER WHERE USER.user_id = '${user_id}';`);
    mysqlConnection.query(`SELECT USER.username FROM USER WHERE USER.user_id = '${user_id}';`,
        function (err, rows, fields) {
            if (rows[0] != undefined) {
                res.send(rows);

            } else {
                res.send("username not found");
            }
            
        });
}


//get fname
exports.getFname = function (req, res) {
    user_id = req.params.user_id;
    console.log(`SELECT USER.fname FROM USER WHERE user_id = '${user_id}';`);
    mysqlConnection.query(`SELECT USER.fname FROM USER WHERE user_id = '${user_id}';`,
        function (err, rows, fields) {
            if (rows[0] != undefined) {
                res.send(rows);

            } else {
                res.send("fname not found");
            }

        });
}   




//get lname
exports.getLname = function (req, res) {
    user_id = req.params.user_id;
    console.log(`SELECT USER.lname FROM USER WHERE user_id = '${user_id}';`);
    mysqlConnection.query(`SELECT USER.lname FROM USER WHERE user_id = '${user_id}';`,
        function (err, rows, fields) {
            if (rows[0] != undefined) {
                res.send(rows);

            } else {
                res.send("lname not found");
            }

        });
}     

//get password
exports.getPassword = function (req, res) {
    mysqlConnection.query("SELECT USER.password FROM USER WHERE USER.user_id = \'" + req.params.user_id + "\';",
        function (err, rows, fields) {
            if (rows[0] != undefined) {
                res.send(rows);

            } else {
                res.send("password not found");
            }

        });
}     


//Update email in user table route
exports.updateEmail = function (req, res) {

    mysqlConnection.query("UPDATE USER SET USER.email = \'" + req.params.email + "\'  WHERE USER.username = \'" + req.params.username + "\';",
        function (err, rows, fields) {
            if (err) {
                logger.error(err.message);
            }
        });

    res.send("Email Updated");

}


//Changes the password
exports.updatePassword = function(req,res){
    mysqlConnection.query(`UPDATE USER SET USER.password = '${req.params.password}' WHERE USER.user_id = '${req.params.user_id}';`,function(err,rows,fields){
        if(err){
            res.send("error");
        } else {
            res.send("password updated");
        }
    });
}


//changes the fname
exports.updateFname = function (req, res) {
    mysqlConnection.query("UPDATE USER SET USER.fname = \'" + req.params.fname + "\'  WHERE USER.user_id = \'" + req.params.user_id + "\';", function (err, rows, fields) {
        if (err) {
            res.send("error");
        } else {
            res.send("fname update");
        }

    });
}


//change the lname
exports.updateLname = function (req, res) {
    mysqlConnection.query("UPDATE USER SET USER.lname = \'" + req.params.lname + "\'  WHERE USER.user_id = \'" + req.params.user_id + "\';", function (err, rows, fields) {
        if (err) {
            res.send("error");
        } else {
            res.send("lname update");
        }
    });
}

