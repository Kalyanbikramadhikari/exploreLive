const express = require('express');
const router = express.Router();
// const multer = require('multer')

// // const multer = require('multer')
// // const rac = require('../public/')
// const path = require('path')

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./backend/public/images')
//     },
//     filename : (req, file, cb)=>{
//         console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage:storage})

const {register, login, logout, getUserProfile, updatePassword, updateProfile, getAllUsers, getOneUser, forgotPassword, resetPassword} = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/checkAuthentication');
const upload = require('../middlewares/multerMiddleware')
// console.log(
    
//     'upload',upload)

// router.route('/register').post(register)
router.route('/register').post(upload.single('image'),register)

router.route('/admin/users').get(isAuthenticated, getAllUsers)
router.route('/admin/users/:id')
                        .get(isAuthenticated, getOneUser)

router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticated, getUserProfile)
router.route('/update/password').post(isAuthenticated, updatePassword)
router.route('/update/profile').post(isAuthenticated, updateProfile)


router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:token').post(resetPassword)

module.exports = router