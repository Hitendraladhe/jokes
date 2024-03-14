// models/user.js
const mongoose = require('mongoose');
const validation  = require('validator')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true , 
        unique:[true, "Email Id Already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid User");
            }
        }
    },
    password: { type: String, required: true }
});


module.exports = mongoose.model('users', userSchema);