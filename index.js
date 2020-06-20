const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
let productData=[];
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.post("/product",(req,res)=>{
    productData.push(req.body);
    res.json({
        message:"success"
    })
} )

app.get("/product",(req,res)=>{
    res.json(productData);
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("go to localhost @ 3000")
})