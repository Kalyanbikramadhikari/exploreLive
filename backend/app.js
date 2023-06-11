const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')
const cloudinary = require('cloudinary').v2
// importing routes
const hotels = require('./routes/hotel')
const auth = require('./routes/auth')
const payment = require('./routes/payment')
const errorMiddleware = require('./middlewares/errorMiddleware');
const bookings = require('./routes/bookings')

//middlewares
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
app.use(cors()) // Use this after the variable declaration
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.json())
app.use('/api/hotels',hotels)
app.use('/api/hotels/',bookings)
app.use('/api/', auth)
app.use('api/', payment)


//error middleware
app.use(errorMiddleware)

//setting up cloudinary configuration
cloudinary.config({ 
    cloud_name: 'dudqq75ie', 
    api_key: '825425753493872', 
    api_secret: 'ExBFN4jHnf__iAR2ll5Lk9up8kk' 
  });

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });





module.exports = app
