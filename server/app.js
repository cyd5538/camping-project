const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const CampingUser = require('./Model/UserModel')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// 몽고디비 연결
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => console.log("몽고 연결"))
  .catch((err) => console.log(err));


app.post('/api/register', async (req,res) => {
    console.log(req.body);
    try {
        await CampingUser.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        res.json({ status: 'OK'})
    } catch (error) {
        res.json({status : "error", error})
    }
})

app.post('/api/login', async (req,res) => {
        
        const user = await CampingUser.findOne({
            email: req.body.email,
            password: req.body.password
        })

        if(user){
            return res.json({status : "ok", user: true})
        }else{
            return res.json({status : "error", user: false})
        }

})

app.listen(3001, () => {
    console.log(`server 3001`);
})