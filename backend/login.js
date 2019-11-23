
const mysqlConnection = require('./sqlfile.js');


//Creating an account function
exports.createAccount = function(req,res){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    //getting the paramaters
    username = req.params.username;
    fname = req.params.fname;
    lname = req.params.lname;
    password = req.params.password;
    email = req.params.email;
    qr_code = req.params.qr_code;

    var created_at = dateTime;
    
    query = "INSERT INTO USER (username,fname,lname,password,email,created_at,qr_code)"+
    " VALUES(\"" +  username + "\",\"" +fname + "\",\"" + lname + "\",\"" + password + "\",\"" + email + "\",\"" + created_at + "\",\"" + qr_code + "\");";

    console.log(query);
    mysqlConnection.query(query,
            function(err,rows,fields){
                if(err){
                    res.send("<p1> account already exists");
                    }
                else {
                    res.send("<p1> account made <\p1>");
                }
            });
        }


//login function
exports.login = function(req,res){

    username = req.params.username;
    password = req.params.password;

    //Generating the query
    query = "SELECT USER.user_id FROM USER WHERE USER.username = \'" + username + "\'" +
            "AND USER.password = \"" +password + "\";";

    //sending the query
    mysqlConnection.query(query,
            function(err,rows,fields){
                //If nothing is returned, login was unsuccessful
                if(err)
                    res.send("<p1> login unsuccessful <\p1>");
                //If something was returned, login was successful
                else{

                    if(rows.length == 1){
                        res.send("<p1> login successful <\p1>");
                    }
                    else res.send("<p1> login unsuccessful <\p1>");
                }
            });

}

