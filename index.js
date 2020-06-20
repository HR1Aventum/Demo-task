const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
let productData = [];

// app.get('/users',(req,res)=>{
//     res.json([
//         {
//             name:"Person 1",
//             age:20
//         },
//         {
//             name:"Person 2",
//             age:30
//         },
//         {
//             name:"Person 3",
//             age:12
//         }
//     ])
// });

// app.get('/product',(req,res)=>{
//     productData.push(req.body);
// } )

app.get('/',(res,req)=>{
    res.send("welcome")
})
app.post('/create',(req,res) => {
    productData.push(req.body);
        res.json({
            message:"product created"
        })
    } )

app.get('/product',(req,res)=>{
     res.json(productData)
})

app.listen(process.env,PORT || 3000,()=>{
    console.log("check @ port"+process.env.PORT)
})