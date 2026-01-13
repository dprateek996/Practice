const express = require('express');
const app = express();

let requestCount = 0;

//error middleware
app.use(function(err, req, res, next ){
    res.status (404).send({})
        errCount = errCount+1 
    
})

app.use(express.json(), isOldEnoughMiddleware);
app.use((req, res, next) => {
  requestCount++;
  next();
});

setInterval(()=>{
    numberofRequestsForUser = {};
},1000)


//rate limiting
app.use(function(req,res,next){
    const userId = req.headers["user-id"];

    if(numberofRequestsForUser[userId]){
        numberofRequestsForUser = numberofRequestsForUser[userId]+1;
        if(numberofRequestsForUser[userId]> 5){
            res.status(404).send("no error");
        }
        else{
            next();
        }
    }
    else{
        numberofRequestsForUser[userId]= 1;

        }
    
})

function isOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}


function isOldEnoughMiddleware(req, res, next){
 const age = req.query.age;
 if(age>=14){
    next();
 }
 else{
    res.json({
        msg: "Hi you are not eligible"
    });
 }
}


//AFTER USING MIDDLEWARE
app.get('/ride2',  function(req, res){
    res.json({
    msg: "Hi your tickets",
    requestCount: requestCount
   
    });
  
    });



//BEFORE MIDDLEWARE    
app.get('/ride1', function(req, res){
if(isOldEnough(req.query.age)){
    res.json({
    msg: "Hi your tickets",
     requestCount

 })
}
 else{
      return res.status(411).json({
        msg: "Not eligible"
      })
 }
})
app.listen( 3000); 