const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/registratiosnDb");


const ClientModel = require('./clientModel');

app.post('/client', (req,res)=>{
    ClientModel.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})



app.post("/admin", (req,res) =>{
    const {email, password} = req.body;
    AdminModels.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Password is incorrect")
            }
           
        }
        else{
              res.json("No records existed ")  
        }
    })

})

const AdminModels = require('./adminModel')
app.post('/admin', (req,res)=>{
    AdminModels.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})




app.listen(PORT, ()=>{
    console.log(`server is connected with ${PORT}`)
});