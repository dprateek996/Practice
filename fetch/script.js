const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtpassword = "123456";

app.use(express.json());

const ALL_USERS = [{

username: "prateek@gmail.com",
password: "1234",
name: "Prateek"
},
{
 username: "manav@gmail.com",
 password: "123",
 name: "Manav"
},
{ username: "manu@gmail.com", 
  password: "12345",
  name: "Manu"  
},];

function userExists(username, password){
   let userExists = false;
 for (var i =0; i<ALL_USERS.length; i++){
  if (ALL_USERS[i].username == username && ALL_USERS[i].password == password ){
    userExists = true;
  }
 }
 return userExists;
}

app.post('/signin', function(req, res){
const username = req.body.username;
const password = req.body.password;

if(!userExists(username, password)){
    return res.status(403).json({
    msg: "User does not exists,"
    });
}
 
var token = jwt.sign({username: username}, jwtpassword);
    return res.json({
       token,
    });
});

app.get('/', function(req , res){
    const token  = req.headers.authorization;
    const decoded = jwt.verify(token, jwtpassword);
    const username = decoded.username;

    res.json({
       users:  ALL_USERS
    })
})

app.listen(3000);