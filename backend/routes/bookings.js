const express = require('express');
const router = express.Router();

const { createNewBooking, mybookings, allbookings, getSingleBooking, getAllBookings, getLoggedInUserBookings } = require('../controllers/bookingController');
const { isAuthenticated } = require('../middlewares/checkAuthentication');


router.route('/booking/new').post(createNewBooking)
router.route('/booking/:id').get(getSingleBooking)
router.route('/admin/bookings').get(getAllBookings)
router.route('/user/bookings').get(isAuthenticated, getLoggedInUserBookings)



// router.route('/booking/mybookings').get(isAuthenticated, mybookings)
// router.route('/booking/allbookings').get(allbookings)





module.exports = router
