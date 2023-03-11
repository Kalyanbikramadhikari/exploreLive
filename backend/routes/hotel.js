
const express = require('express');
const router = express.Router();

const {gethotel, newHotel, updateHotel, deleteHotel, getSingleHotel} = require( "../controllers/hotelController"); 
const { isAuthenticated } = require('../middlewares/checkAuthentication');


router.route('/').get( gethotel)
//only an admin can create a new hotel
router.route('/new').post(isAuthenticated, newHotel)
router.route('/delete/:id').delete(isAuthenticated, deleteHotel)
router.route('/update/:id').put(updateHotel)

router.route('/:id').get(getSingleHotel)


module.exports = router