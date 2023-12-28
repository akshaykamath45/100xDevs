const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("Hospital Management")
})


// To check kidney
// It will do 2 things :
// 1. Authentication   -> username and password passed in headers should be correct
// 2. Input Validation -> kidneyId passed as an query param should be either 1 or 2 , since number of kidneys in humans is 2.
app.get("/health-checkup", function (req, res) {
  const {kidneyId}=req.query
  const username=req.headers.username
  const password=req.headers.password

  if(username!="admin" || password!="root"){
    res.status(403).json({message:"Authentication failed,please enter correct username and password."})
    // early return as we dont want to execute the rest of the code
    // since the user authentication failed
    return;
  }
  if(kidneyId!=1 && kidneyId!=2){
    // 411 to check length
    res.status(411).json({message:"Input validation failed,number of kidneys can be either 1 or 2 in humans."})
    return
  }

  res.send("You are healthy");
});

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

// creating a new route , repeating the same code
// update - > replace kidney 
// to replace kidney , I also need to do authentication and check number of kidneys , so I will need to copy the same thing from aboce
// here comes the DRY principle , Don't Repeat Yourself

app.put("/replace-kidney",(req,res)=>{
  const {kidneyId}=req.query
  const username=req.headers.username
  const password=req.headers.password

  if(username!="admin" || password!="root"){
    res.status(403).json({message:"Authentication failed,please enter correct username and password."})
    // early return as we dont want to execute the rest of the code
    // since the user authentication failed
    return;
  }
  if(kidneyId!=1 && kidneyId!=2){
    // 411 to check length
    res.status(411).json({message:"Input validation failed,number of kidneys can be either 1 or 2 in humans."})
    return
  }

  // kidney replacement logic here

  res.send("You are healthy");
})