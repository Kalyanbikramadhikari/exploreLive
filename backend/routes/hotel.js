
const express = require('express');
const router = express.Router();

const {gethotel, newHotel, updateHotel, deleteHotel, getSingleHotel} = require( "../controllers/hotelController"); 
const { isAdminTrue } = require('../middlewares/checkAdmin');
const { isAuthenticated } = require('../middlewares/checkAuthentication');

// I am assuming the using the same funciton for both admin and user will not cause error
//but if it does we need to make newer one
router.route('/').get( isAuthenticated, gethotel)
//only an admin can create a new hotel
router.route('/admin/new').post(isAuthenticated,isAdminTrue, newHotel)
//below the route where admin can delete a user
router.route('/admin/delete/:id').delete(isAuthenticated, isAdminTrue, deleteHotel)
//update hotel by admin
router.route('/admin/update/:id').put(isAuthenticated, isAdminTrue, updateHotel)

//by self
router.route('/update/:id').put(isAuthenticated, updateHotel)
// delete user by self
router.route('/delete/:id').delete(isAuthenticated, deleteHotel)
router.route('/:id').get(isAuthenticated, getSingleHotel)
router.route('/new').post(isAuthenticated, newHotel)

module.exports = router