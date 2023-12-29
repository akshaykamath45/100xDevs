const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hospital Management");
});


app.use(express.json()) // helps in post request for extracitng json data from the body

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
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