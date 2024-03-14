const express = require("express");
require("./conn.js")
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const User = require('./userModle.js');

const app = express();

const port = process.env.PORT || 6000
const router = express.Router(); 



app.use(express.json());
app.use(bodyParser.json());
app.use(cors());




app.post("/signup", async(req, res)=>{
  
    try {
      console.log("hello SignUp Post");
    const data = await User(req.body);
    data.save();
    
    res.send(data);
    } catch (error) {
      res.send(error).status(404).send()   
    }
})

app.post("/login", async(req, res)=>{
  console.log("hello Log In Post", req.body.username);
  const{email} = req.body
  try {
    const data = await User.findOne({email,})
     
    if(data.length === 0){
      res.send("Invalid User").status(400)
    }
    
      
    res.json(data).send()
  } catch (error) {
    res.send("Bad Req").status(404)
  }
})



app.listen(port,()=>{
    console.log(`Hello Server is running ${port}`);
});