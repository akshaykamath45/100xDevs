const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("Hospital Management")
})

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