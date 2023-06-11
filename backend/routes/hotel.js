
const express = require('express');
const router = express.Router();

const {gethotel, newHotel, updateHotel, deleteHotel, getSingleHotel, countByCity, getCountByType, countByCities, gethomestaysincity, searchByCity, } = require( "../controllers/hotelController"); 
const { isAdminTrue } = require('../middlewares/checkAdmin');
const { isAuthenticated } = require('../middlewares/checkAuthentication');
const { stripePayment, stripeAPIkey } = require('../controllers/paymentController');

// I am assuming the using the same funciton for both admin and user will not cause error
//but if it does we need to make newer one
router.route('/').get( gethotel)
router.route('/homestaysincity/:city').get( gethomestaysincity)
router.route('/search').get(searchByCity)

//only an admin can create a new hotel
router.route('/admin/new').post(isAuthenticated, newHotel)
router.route('/payment/process').post(stripePayment)
router.route('/stripeapi').get(stripeAPIkey)

//below the route where admin can delete a user
router.route('/admin/delete/:id').delete(isAuthenticated, isAdminTrue, deleteHotel)
//update hotel by admin
router.route('/admin/update/:id').put(isAuthenticated, isAdminTrue, updateHotel)

//by self
router.route('/update/:id').put(isAuthenticated, updateHotel)
// delete user by self
router.route('/delete/:id').delete(isAuthenticated, deleteHotel)
router.route('/countByType').get(isAuthenticated,getCountByType)
router.route('/countByCity').get(countByCity)
router.route('/countByCities').get(countByCities)

router.route('/:id').get( getSingleHotel)
router.route('/new').post(newHotel)




module.exports = router