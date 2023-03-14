const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
        //since we have not make our username as unique, we wont be using username for login
    },
    email:{
        type:String,
        required: true,
        unique: true,
        validate : [validator.isEmail, 'Please enter valid email address']

    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date


},{timestamps:true})


module.exports=  mongoose.model("User", userSchema)