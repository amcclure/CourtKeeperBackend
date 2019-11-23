const express = require('express')
const app = express()
const morgan = require('morgan')
//const cors = require('cors');
const mysql = require('./sqlfile.js');
const bodyParser = require('body-parser');
const login = require('./login.js');
const profile = require('./profile.js')

app.use(morgan('combined'))
app.use(bodyParser.json());
//app.use(cors());


app.get('/useDevDB', function(req,res){
    mysql.useDevDB();
    res.send(200);
  })


//LOGIN

//account creation route
app.get('/login/createAccount/:username/:fname/:lname/:password/:email/:qr_code', login.createAccount);
//login route
app.get('/login/login/:username/:password',login.login)


//PROFILE

//return email
app.get('/profile/getEmail/:username',profile.getEmail)
//return id
app.get('/profile/getUserID/:username',profile.getUserID)
//return all info
app.get('/profile/getUserInfo/:username',profile.getUserInfo)
//return username
app.get('/profile/getUserName/:user_id',profile.getUserName)
//return fname
app.get('/profile/getFname/:user_id',profile.getFname)
//return lname
app.get('/profile/getLname/:user_id',profile.getLname)
//return password
app.get('/profile/getPassword/:user_id',profile.getPassword)
//update email
app.get('/profile/updateEmail/:email/:username',profile.updateEmail)
//Update password
app.get('/profile/updatePassword/:password/:user_id',profile.updatePassword)
//Update fname
app.get('/profile/updatefname/:fname/:user_id',profile.updateFname)
//Update lname
app.get('/profile/updatelname/:lname/:user_id',profile.updateLname)




app.listen(3304, () =>{
    console.log("Server running")
})