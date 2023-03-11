const User = require('../models/user')
const bcrypt= require('bcryptjs')
const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../.env'})

//register is actually the create
// register a user => api/register
module.exports.register = async(req,res,next)=>{
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const newUser = await User.create({
        username:req.body.username,
        email: req.body.email,
        password:hash
        // password: req.body.password
    })
    res.status(201).json({
        success: true,
        newUser
    })
}

//READ operation
//get all users(by admin)=>api/admin/users

module.exports.getAllUsers = async(req,res,next)=>{

    const allUsers = await User.find();


    res.status(200).json({
        success:true,
        allUsers
    })
}

//get individual user by admin => api/admin/users/:id
module.exports.getOneUser = async(req,res,next)=>{

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findById(req.params.id)
        
        if(!user){
            return next(new ErrorHandler('User not found', 404))
        }

        res.status(200).json({
            sucess: true,
            user
        })
        
        
    }else{
        return next(new ErrorHandler('wrong id',404))
    }
}

//UPDATE
//update any user(by admin) => api/admin/user/update/:id
module.exports.deleteOneUser = async(req,res,next)=>{

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findById(req.params.id)
        
        if(!user){
            return next(new ErrorHandler('User not found', 404))
        }

        await user.remove()
        res.status(200).json({
            sucess: true,
            message: 'user removed sucessfully'
        })
        
        
    }else{
        return next(new ErrorHandler('wrong id',404))
    }
}

module.exports.updateUser = async(req,res,next)=>{
    
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findById(req.params.id)
        
        if(!user){
            return next(new ErrorHandler('User not found', 404))
        }else{
            const updatedUser = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{
                new: true,
                // runValidators: true,
                // useFindAndModify: false
            });
        
            res.status(200).json({
                sucess: true,
                updatedUser
            })
        }
        
    }else{
        return next(new ErrorHandler('wrong id',404))
    }

}

//Delete user by admin =>api/admin/users/:id



// login in user => api/login
module.exports.login = async(req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password',400))
    }

    const user = await User.findOne({email})
    console.log('user', user)

    if(!user){
        return next (new ErrorHandler('Invalid email or password',401))//401 is unauthenticated user

    }
    console.log('user.password',user.password, password)
    const checkPassword = await bcrypt.compare(password, user.password)
    console.log('checkPassword', checkPassword)

    if(!checkPassword){
        return next(new ErrorHandler('invalid email or password',400))

    }

    // console.log('process.env.JWT_SECRET', process.env.JWT_SECRET)
    // token
    // in the sign method we generally pass the information about the user like id or isAdmin and sign it with the secret key
    const token = jwt.sign({id:user.id, isAdmin:user.isAdmin},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24* 60*60*1000
        ),
        httpOnly: true
    }
    res.cookie("access_token", token,options).status(200).json({
        success:true,
        token,
        user
        

    })
}


//logour user => api/logout
module.exports.logout = async(req,res,next)=>{
    res.cookie('access_token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message:'Logged Out Successfully'
    })
}
//change password i.e. update password =>api/password/update
exports.updatePassword = async(req,res,next)=>{
    const user = await User.findById(req.user.id)
    const {oldPassword} = req.body
    console.log('oldPassword', oldPassword)
    //check previous password
    const checkPassword = await bcrypt.compare(oldPassword, user.password)

    if(!checkPassword){
        return next(new ErrorHandler('Your password did not match with old passwordd',404))


    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.newPassword, salt);
  

    user.password = hash;
    await user.save()

    res.status(200).json({
        success:true,
        message: 'Password Updated sucessfully',
        user
    })
    
}





// Create of user is actually regisetering

//currently loggedin user=> api/me
module.exports.getUserProfile = async(req,res,next)=>{

    const user = await User.findById(req.user.id)

    res.status(200).json({
        sucess:true,
        user
    })
}

//update user profile (by user himself) =>api/me/update/profile
module.exports.updateProfile = async(req,res,next)=>{
    const updatedProfile = await User.findByIdAndUpdate(req.user.id, {$set: req.body},{
                new: true,
                // runValidators: true,
                // useFindAndModify: false
            });

    res.status(200).json({
        success:true,
        updatedProfile
    })
}






