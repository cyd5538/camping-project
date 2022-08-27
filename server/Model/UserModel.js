const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 
const saltRounds = 20; 

const CampingUserSchema = new mongoose.Schema({
    name: { type: String, required: true,  },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})



module.exports = mongoose.model('CampingUser', CampingUserSchema)