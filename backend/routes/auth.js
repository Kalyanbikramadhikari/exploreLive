const express = require('express');
const router = express.Router();

const {register, login, logout, getUserProfile, updatePassword, updateProfile, getAllUsers, getOneUser, forgotPassword, resetPassword} = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/checkAuthentication');


router.route('/register').post(register)
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