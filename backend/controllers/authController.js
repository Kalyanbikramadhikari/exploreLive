const User = require('../models/user')
const bcrypt= require('bcryptjs')

// register a user => api/register
module.exports.register = async(req,res,next)=>{
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const newUser = await User.create({
        username:req.body.username,
        email: req.body.email,
        password:hash
    })
    res.status(201).json({
        success: true,
        newUser
    })
}