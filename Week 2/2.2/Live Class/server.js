const express=require("express")

const app=express()


app.get("/route-handler",(req,res)=>{
    res.json({
        "name":"Akshay",
        "age":20
    })
})
app.get("/",(req,res)=>{
    // req->headers,body,query params
    res.send("Hello server is working fine")
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

