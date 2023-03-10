
const express = require('express');
const router = express.Router();

const {gethotel, newHotel, updateHotel, deleteHotel, getSingleHotel} = require( "../controllers/hotelController") 


router.route('/').get(gethotel)
router.route('/new').post(newHotel)
router.route('/delete/:id').delete(deleteHotel)
router.route('/update/:id').put(updateHotel)

router.route('/:id').get(getSingleHotel)


module.exports = router