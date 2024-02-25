const express = require("express")
const databse = require("./database/index")
const app = express()
const port = 8000 || process.env.PORT
app.use(express.json())
app.get("/",(req,res,next)=>{
    res.send("AjayTest")
})
app.get("/users",(req,res,next)=>{
    res.send("Ajay")
})
databse.testDbConnection()
app.listen(8000,()=>console.log(`Port successfully listening on ${port}`))