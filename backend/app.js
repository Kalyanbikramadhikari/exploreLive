const express = require('express')
const app = express()


// importing routes
const hotels = require('./routes/hotel')
const auth = require('./routes/auth')
const errorMiddleware = require('./middlewares/errorMiddleware')

//middlewares
app.use(express.json())
app.use('/api/hotels',hotels)
app.use('/api/', auth)


//error middleware
app.use(errorMiddleware)


module.exports = app
