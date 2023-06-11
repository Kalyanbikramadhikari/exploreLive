// this checks whether or not the user is authenticated or not
// by veryfying the token. If the user has not logged in then user 
// cannot access all routes
require('dotenv').config({path:'../.env'})
const User = require('../models/user')
const ErrorHandler = require("../utils/errorHandler")
const jwt = require('jsonwebtoken')
module.exports.isAuthenticated = async(req,res,next)=>{
    console.log('into authentication')

    const token = req.cookies.access_token
    // console.log('token', token)


    if(!token){

        //401 is unauthorized
        return next(new ErrorHandler('Login first to access the route',401))
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    // console.log('verified', verified)
    if(!verified){
        next(new ErrorHandler('Invalid token',403))
    }
    req.user = await User.findById(verified.id)
    console.log(req.user)
    next()
}