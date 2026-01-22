const express = require('express');

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello from Home page!");
})
app.get("/about", (req,res)=>{
    res.send("About page!");
})
app.get("/test", (req,res)=>{
    res.send("Test page!");
})

app.listen(port, ()=>{
    console.log("App listening on port ",port);
})