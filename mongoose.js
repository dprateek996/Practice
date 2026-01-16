const mongoose = require ('mongoose');

mongoose.connect("");

const User  = mongoose.model('Users', {name: string, email: string, password: string});

app.post('/', async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
 
    const exisitngUser = await User.findOne({email: username});
    if (exisitngUser){
        return res.status(400).send("Username already exists");
    }
    const user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save();
    res.json({
        msg: "User created successfully"
    })

})