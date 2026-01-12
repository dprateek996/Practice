const express = require('express');
const zod = require('zod')
const app = express();



// app.use(express.json());
// function caltime(){
//     avgtime =0;

// }

// app.get('/health-checkup', function(req, res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyid = req.query.kidneyid;

//     if(username != "Prateek" && password != "1234"){
//          res.status(400).json({"msg":"something is wrong with your input"})
//          return;    
            
//     }
//         if(kidneyid != 1 && !kidneyid != 2){
//             res.status(400).json({"msg":"something is wrod with your input"})
//          return;    
            
// }
//  res.json({
//             msg: "Kidneys are fine"
//          })
// });




// app.use(express.json());
// app.post('/health-checkup', function(res, res, next){
// const kidneys = req.body.kidneys;
// const kidneyLength = kidneys.length;

// res.send("you have"+ kidneyLength + "kidneys");
// });


//const schema = zod.array(zod.number());
// const schema = zod.object({
//      username: zod.string(),
//      password: z.string(),
//      country: z.literal('IN').or (z.literal("US")),
//      kidneys: z.array(z.number())


// })
// app.use(express.json());




app.post("/health-checkup", function (req, res) {
 const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success){
    res.status(411).json({
    msg: "input is invalid"
    })
  }
  else{
   res.send({
    response
  }); 
  }
  
});
app.listen(3000);


//   const kidneyLength = kidneys.length;

//   res.send("you have " + kidneyLength + " kidneys");
// });
// app.use((error, req, res, next)=> {
//     res.status(500).send('An internal server error occurred')
// });

//find the average time your server is taking to handle requestts