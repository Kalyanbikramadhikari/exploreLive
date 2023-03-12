const User = require('../models/user')
const ErrorHandler = require("../utils/errorHandler")
const jwt = require('jsonwebtoken')


module.exports.isAdminTrue = async(req,res,next)=>{

    console.log('req.user.isAdmin', req.user.isAdmin)
    if(!req.user.isAdmin){
        next(new ErrorHandler('User is not admin to access this route', 403))
        //403 is the forbidden
    }
    next()
}