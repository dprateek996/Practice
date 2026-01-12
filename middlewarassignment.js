// const express  = require ('express');
// const zod = require('zod');
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());
// app.use((req,res,next)=>{
// const start = Date.now();
// res.on('finish', ()=> {
//     const start = Date.now();
       const duration=  Date.now() - start;
//     totalTime += duration;
//     requestCount++; 
//     const avgTime = totalTime/requestCount;
//       console.log(`Request took: ${duration}ms | Average: ${avgTime.toFixed(2)}ms`);
// })

// })
// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
  
//   if (!response.success) {
//     res.status(411).json({
//       msg: "input is invalid"
//     });
//   } else {
//     res.send({
//       response
//     }); 
//   }
// });

// // app.post('/', function (req, res){
 
// //     const body = req.body.kidneys;
// //     res.json({
// //         msg: "Kidneys",
// //     })

// // });
// app.listen(3000);

const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

// Timing middleware
let totalTime = 0;
let requestCount = 0;

app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    totalTime += duration;
    requestCount++;
    const avgTime = totalTime / requestCount;
    console.log(`Request took: ${duration}ms | Average: ${avgTime.toFixed(2)}ms`);
  });
  
  next();
});

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid"
    });
  } else {
    res.json({
      response
    }); 
  }
});

app.listen(3000);