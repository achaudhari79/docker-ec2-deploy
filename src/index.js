const express = require("express");

const app = express();

const PORT = 80;

app.get("/", (req,res)=>{
 res.send("GitHub Actions Docker Deployment Successful !!! Performed by amol!!! Here Poert is changed");
});


app.listen(PORT,()=>{
 console.log("Server running on port 80");
});
