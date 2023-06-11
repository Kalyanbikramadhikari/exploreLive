const User = require('../models/user')
const bcrypt= require('bcryptjs')
const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');//this the default package and do not need to install
require('dotenv').config({path:'../.env'})
const nodemailer = require('nodemailer')
require('dotenv').config({path:'../.env'})
const cloudinary = require('cloudinary').v2
const multer = require('multer');
const upload = multer().none(); // Configure multer to handle multipart/form-data
const fs = require('fs');



  
  
  
  
  


//register is actually the create
// register a user => api/register
// module.exports.register = async (req, res, next) => {
//     console.log('into register section');
//     console.log(req.body.email, req.body.username, req.body.password);
  
//     // Handle the uploaded file using the "upload" middleware
//     upload.single('image')(req, res, (err) => {
//       if (err) {
//         console.error('Error:', err);
//         // Handle errors here
//         return res.status(500).json({ success: false, message: 'File upload error' });
//       }
  
//       // Access the uploaded file using req.file
//       const uploadedFile = req.file;
//       console.log('uploaded file:', uploadedFile);
  
//       const salt = bcrypt.genSaltSync(10);
//       const hash = bcrypt.hashSync(req.body.password, salt);
  
//       // Process the rest of the registration logic...
//     //   const result =await cloudinary.uploader.upload(req.body.image,{
//         //     //     folder:'users',
//         //     //     width: 150,
//         //     //     crop:"scale"
        
//         //     // }).then(result => {
//         //     //     console.log('result', result);
//         //     //     // Handle the result here
//         //     //   })
//         //     //   .catch(error => {
//         //     //     console.error('Error:', error);
//         //     //     // Handle errors here
//         //     //   });
//         //     // console.log('result', result)  
        
//         //     // const newUser = await User.create({
//         //     //     username:req.body.username,
//         //     //     email: req.body.email,
//         //     //     password:hash,
//         //     //     image:{
//         //     //         public_id: result.public_id,
//         //     //         url: result.secure_url
  
//       res.status(201).json({
//         success: true,
//         // newUser
//       });
//     });
//   };
module.exports.register = async (req, res, next) => {
    // console.log(req.file)
    // const buffer = fs.readFileSync(req.file.path);

      const {username,email,password} = req.body
      console.log('into register section');
    //   console.log(req.body)
    // const result = await cloudinary.uploader.upload(image,{
    //     folder: 'avatars',
    //     // width:500,
    //     // crop:"scale"
    // })
    //   console.log(req.body.email, req.body.username, req.body.password);
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    
    // const result =await cloudinary.uploader.upload(req.body.image,{
    //     folder:'users',
    //     width: 150,
    //     crop:"scale"

    // }).then(result => {
    //     console.log('result', result);
    //     // Handle the result here
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     // Handle errors here
    //   });
    // console.log('result', result)  

    try {
        const newUser = await User.create({
          username,
          email,        
          password: hash,
        //   image: buffer
        });
      
        // Handle the successful creation of the new user
        console.log('New user created:', newUser);
      } catch (error) {
        // Handle the error that occurred during user creation
        console.error('Error creating a new user:', error);
      }
    res.status(201).json({
        success: true,
        // newUser
      });
    // });
  };

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

//forgot password
module.exports.forgotPassword = async(req,res,next)=>{

    const user = await User.findOne({email: req.body.email})

    if(!user){
        return next(new ErrorHandler('User Not Found', 404))
    }
    //genereate forgot password token
    const forgotPasswordToken = crypto.randomBytes(20).toString('hex');
    //hash forgot password token
    const hashedtoken = crypto.createHash('sha256').update(forgotPasswordToken).digest('hex')

    //token expires time i.e for 30 min
    const expires = Date.now() + 30 * 60* 1000

    //now we need to store this token and expiring time in database
    user.resetPasswordToken = hashedtoken;
    user.resetPasswordExpires = expires

    await user.save()

    //create reset password url
    //req.protocol checks whether it is http or https
    //req.get('host') is a localhost:4000 in local case
    const resetUrl = `http://localhost:4000/api/resetpassword/${hashedtoken}`

    const message = `Your password reset token is as follow:\n\n ${resetUrl}\n\n If you have not requresed this email, then ignore it`

    // try{

    //     await sendEmail({
    //         email: user.email,
    //         subject: 'Password recovery',
    //         message
    //     })
    //     res.status(200).json({
    //         success:true,
    //         message: `Email sent to ${user.email}`
    //     })

    // }catch(error){
    //     user.resetPasswordToken = undefined;
    //     user.resetPasswordExpires =undefined;
    //     await user.save()

    //     return next(new ErrorHandler(error,500))
    // }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
    
      const mailOptions = {
        from: process.env.EMAIL,
        // later to should be changed to user.email
        to: 'kalyanad100@gmail.com',
        subject: 'Reset your password',
        text: `Please click the following link to reset your password: http://localhost:3000/reset-password?token=${hashedtoken}`
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Unable to send email' });
        } else {
          console.log(`Email sent to ${user.email}: ${info.response}`);
          res.json({ message: 'An email has been sent to your email address with instructions on how to reset your password.' });
        }
      });
    
}


//reset password => api/resetpassword/:token

module.exports.resetPassword = async (req,res,next)=>{

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires: {$gt: Date.now()} // gt means greater than

    })

    if(!user){
        return next(new ErrorHandler('password reset token is invalid or has been expired',400))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler('password did not match', 400))
    }

    //setup new password
    user.password = req.body.password
    user.resetPasswordToken = hashedtoken;
    user.resetPasswordExpires = expires

    await user.save()

    res.status(200).json({
        success:true,
        message: 'password reset sucessful'
    })

}






