//zod auth and express

// const express=require('express');
// const zod=require('zod');
// const app = express();
// const schema=zod.string();

// let arr=[1,2,3,4,5,6,7];
// function firstMiddleWare(req,res,next){
//     if(req.query.name=='Asher'){
//       const response= schema.safeParse(req.query.name);
//         if(response.success){
//         res.send(arr.filter((data)=>data==2).map((num)=>num*2));
//         next();
//         }
//     }else{
//         res.send('In Correct User');
//         next();
//     }
// } 

// app.get('/',firstMiddleWare,(req,res)=>{

// });

// app.listen(3000,()=>{
//     console.log('Server running on PORT: 3000');
// });

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose=require('mongoose');
mongoose.connect('');

const User=mongoose.model('User',{
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
}

async function signUp(req,resp,next){
    const username = req.body.username;
    const password = req.body.password;
    const name=req.body.name;

    const existingUser=await User.findOne({username:username});

    if(existingUser){
      return resp.status(403).send("user already exists");
    }

    if(username!=null&&password!=null&&name!=null){
        const user=new User({
            name:name,
            username:username,
            password:password,
        });
        user.save();
        next();
    }
}
app.post("/signup",signUp,(req, res) =>{
    res.send({
        "msg":"created successfully"
    });

});
app.post("/signin", (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users",(req, res)=> {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
} catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)