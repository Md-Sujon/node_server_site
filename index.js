const express = require('express')

const app=express();

// const rootCall = (req,res)=>res.send('Thank you very much')

// function rootCall(req,res){
//     res.send('Thank you very much sujon')
// }

// const rootCall =(req,res)=>res.send('Thank you Rakib')

app.get('/',(req,res)=>res.send('Thank you smita'));

app.listen(3000,console.log("Listing to port 3000"));
