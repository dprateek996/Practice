const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const app = express();



const JWT_SECRET = 'secret';
const users = []
const schema = zod.object({
     email: zod.string().email(),
        password: zod.string().min(8),
        name: zod.string()
})
const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8)
});

 


let totalTime = 0;
let requestCount = 0;
app.use(express.json());

const authMiddleware = (req,res, next)=>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({msg: "no token proivided"})
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
    }
    catch(error){
        return res.status(403).json({msg: "Invalid token"})
    }
     next();
};
app.use(function reqCount(req,res,next){
const start = Date.now();

res.on(`finish`,() => {
    
    const duration = Date.now() - start;
    totalTime += duration;
     requestCount++;
    const avgTime = requestCount ? totalTime / requestCount : 0;
    console.log(`Request took:${duration}ms | Average Time: ${avgTime.toFixed(2)}ms | ${requestCount}` );
});
next();
});

app.post('/signin', (req, res) => {
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ msg: "Invalid Input" });
  }

  const { email, password } = result.data;

  const user = users.find(user => user.email === email);
  if (!user || user.password !== password) {
    return res.status(401).json({ msg: "Invalid email or password" });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET);
  return res.json({ token });
});


app.post('/signup', (req, res) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ msg: "Invalid Input" });
  }
  
  if (users.find(u => u.email === result.data.email)) {
    return res.status(409).json({ msg: "User already exists" });
  }
  
  users.push({ id: users.length + 1, ...result.data });
  return res.status(201).json({ msg: "User created" });
});

app.get('/', function(req, res, next ){

 res.send("Hi server is running ");

});
app.get('/metrics/', function(req,res,next){
const avgTime = requestCount ? totalTime / requestCount : 0;
  res.json({
    totalTime,          // ms
    avgTime,            // ms per request
    requestCount
});
});

app.get('/me', authMiddleware, (req, res)=> {
    const email = req.email;
    const user = users.find(u=> u.email === email);
    if(!user) return res.status(404).json({msg: "User Not Found"});
    const safeUser = {id: user.id, email: user.email, name: user.name };
    return res.json({ user: safeUser}); 
})





app.listen(3000, ()=> {
    console.log("Server Running");
});
