const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hospital Management");
});


let count = 0;
function countRequest(req, res, next) {
  count++;
  console.log(`Total requests : ${count}`);
  next();
}

function timeMiddleware(req, res, next) {
    const start = Date.now();
    res.on("finish", () => {
      const end = Date.now();
      console.log(`Time taken : ${end - start} ms`);
    });
    next();
  }

// app.use() - > is like a global middleware,which will be applied to all the routes.  
app.use(countRequest);
app.use(timeMiddleware);
app.use(express.json()) // helps in post request for extracitng json data from the body


// To check kidney
// It will do 2 things :
// 1. Authentication   -> username and password passed in headers should be correct
// 2. Input Validation -> kidneyId passed as an query param should be either 1 or 2 , since number of kidneys in humans is 2.

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "admin" || password != "root") {
    res.status(403).json({
      message:
        "Authentication failed,please enter correct username and password.",
    });
    // early return as we dont want to execute the rest of the code
    // since the user authentication failed
    return;
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const { kidneyId } = req.query;
  if (kidneyId != 1 && kidneyId != 2) {
    // 411 to check length
    res.status(411).json({
      message:
        "Input validation failed,number of kidneys can be either 1 or 2 in humans.",
    });
    return;
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.json({ message: "You are healthy " });
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// creating a new route , repeating the same code
// update - > replace kidney
// to replace kidney , I also need to do authentication and check number of kidneys , so I will need to copy the same thing from aboce
// here comes the DRY principle , Don't Repeat Yourself

app.put("/replace-kidney", userMiddleware, kidneyMiddleware, (req, res) => {
  // kidney replacement logic here
  res.json({ message: "Kidney replaced successfully" });
});

app.get("/replace-kidney", userMiddleware, kidneyMiddleware, (req, res) => {
  // kidney replacement logic here

  res.json({ message: "You are healthy enough to replace kidney " });
});


// input validation
app.post("/health-checkup",(req,res)=>{
    // kidney is an array and can have only size as 2 - > [1,2]

    // user could pass any thing in body , it could be a number , object,string,anything
    // so we need a input validation here

    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    console.log(`You have ${kidneyLength} kidneys`)
    res.json({message:`You have ${kidneyLength} kidneys`})
})

// global catches - > error handling middleware , takes 4 inputs, placed at last . exception is hidden.
app.use((err,req,res,next)=>{
    res.json({
        message:"Sorry,something is up with our server",
    })
    console.log(err)
    console.log(err.stack)
})