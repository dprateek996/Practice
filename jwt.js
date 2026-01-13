const jwt = require('jsonwebtoken');
const zod = require ('zod');
const { de } = require('zod/v4/locales');


// const value =({
//      name: "PRATEEK",
//      age: "21",
//      accountnumber: "232323"
// })

// const token = jwt.sign(value, "secret")
// console.log(token);


// function check (username, password){
//     const username  = username;
//     const password = password;
    

//     const valuee = ({
//         username,
//         password
//     })

//     if( validateInput(valuee){
//       res
        
//     })

//     const token = jwt.sign(valuee, "secrett")
//     return token;
// }



const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailschema.safeParse(username);
    const passwordResponse  = passwordschema.safeParse(password);
    if( !usernameResponse.success || !passwordResponse.success){
        return null;
    }
        const signature = jwt.sign({
            username
        },jwtPassword);

        return signature;
        }

const ans = signJwt ("prateek@gmail.com", "123456")
console.log(ans);

function decoded (token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    } else {
        return false;
    }

}

function verifyJwt(token){
let ans = true;
try{
    jwt.verify(token, jwtPassword);
}
catch(e){
    ans = false;
}
return ans;
}
const anss = verifyJwt("adadaa");
console.log(ans);
