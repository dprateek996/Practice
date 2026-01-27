const express = require ('express');
const {v4: uuid4} = require ('uuid');

const app = express();

app.use(express.json());

const idempotencyStore = new Map();
const database =  [];

const idempotencyCheck =(req,res,next) =>{
 
    const key = req.header('x-idempotency-key');
 
    if(!key){
        return res.status(400).json({
            error: "Missing X -idempotency-key header" });

        }
    
     if(idempotencyStore.has(key)){

      console.log(`[RETRY DETECTED] Key: ${key}.Returning cached response`);
       return req.json(idempotencyStore.get(key));
     }
     
     res.sendResponseAndCache = (data)=>{
        idempotencyStore.set(key,data);
        res.json(data);
     };
    next();
    
    };
app.post("/memos", (req,res)=>{
 
    const {text} = req.body;
    
    console.log(`[Processing] Adding Memo: "${text}"`);

    const newMemo = {
      
        id: database.length+1,
        text: text,
        createdAt: new Date().toISOString()
    };
     
      database.push(newMemo);
      res.sendResponseAndCache({
        message: "Memo saved successfully!",
        data: newMemo
      });
});

app.get("/memos", (req, res)=> res.json(database));

