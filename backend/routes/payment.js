const express = require('express');
const { stripePayment, stripeAPIkey } = require('../controllers/paymentController');
const router = express.Router();

// router.route('/payment/process').post(stripePayment)
//  router.route('/stripeapi').get(stripeAPIkey)


module.exports = router
