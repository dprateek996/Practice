const express = require('express')
const app = express();


app.get('/interest',(req, res)=>{

    const principal = parseInt(req.query.sum);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);
    const interest = (principal * rate * time)/ 100;
    const  total = principal + interest;
    
    res.send({
     Total: total,
     Interest: interest
    });
})

app.listen(3000);
