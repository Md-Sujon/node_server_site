const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app=express();

app.use(cors())
app.use(bodyParser.json())

// const rootCall = (req,res)=>res.send('Thank you very much')

// function rootCall(req,res){
//     res.send('Thank you very much sujon')
// }

// const rootCall =(req,res)=>res.send('Thank you Rakib')

app.get('/',(req,res)=>{
    const fourts={
        product:"ada",
        price:20
    }
    res.send(fourts)
});

// app.get('/fruits/banna',(req,res)=>{
//     res.send({fruit:'Banna',quantity:1000,Price:10000});
// })

const users= ['sujon','robin','salam','kalam','faruk','parvin']


app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const name=users[id]; 
    res.send({id,name})
})


// post
app.post('/addUser',(req,res)=>{
    // save to database
    const user=req.body;
    user.id=55;
res.send(user);
});



// app.get('/users/:id',(req,res)=>{

// const userId=req.params.id;
// const name=users[userId]
// res.send(name);
// console.log({name});

// })

app.listen(3000,console.log("Listing to port 3000"));
