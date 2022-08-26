const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 
const saltRounds = 20; 

const CampingUserSchema = new mongoose.Schema({
    name: { type: String, required: true,  },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

CampingUserSchema.pre('save', async function(next) {
    var user = this;
    
    if(user.isModified('password')) {  // pw변경시에만 해쉬값 넣도록
        bcrypt.genSalt(saltRounds, function(err, salt) {
          if(err) return next(err) //에러나오면 index로
          bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) return next(err)
            user.password = hash
            next()  // hash값 저장했으면 index로
          });
        });
      } else {
        next()
      }
})
    


module.exports = mongoose.model('CampingUser', CampingUserSchema)