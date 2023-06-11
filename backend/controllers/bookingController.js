// const bookings = require('../models/bookings')
const Bookings = require('../models/bookings')
const Homestay = require('../models/hotel')
const ErrorHandler = require('../utils/errorHandler')

//create a new booking

module.exports.createNewBooking = async(req,res)=>{
    console.log(req.body)
    const {
        userdetail,
        user,
        bookingDetail,
        paymentInfo,
        // paidAt,
        // taxPrice,
        // totalPrice,
        
    } = req.body
    
    const newBooking = await Bookings.create({
        userdetail,
        user,
        bookingDetail,
        paymentInfo,
        // paidAt,
        // taxPrice,
        // totalPrice,
        paidAt:Date.now()

    
    })

    res.status(201).json({
        success:true,
        newBooking
    })
}

//get single booking
exports.getSingleBooking = async(req,res,next)=>{
    // const bookings = await Bookings.findById(req.params.id).populate('user','name email') // no idea about what .populate does
    const bookings = await Bookings.findById(req.params.id)

    if(!bookings){
        return next(new ErrorHandler('No bookings found with this ID'),404)
    }
    res.status(200).json({
        success: true,
        bookings
    })
}

//get all bookings
exports.getAllBookings = async(req,res)=>{
    console.log('into get all bookings')
    const bookings = await Bookings.find()
    console.log(bookings)

    res.status(200).json({
        success:true,
        bookings
    })


}

exports.getLoggedInUserBookings = async(req,res)=>{
    // console.log(req.user)
    const bookings = await Bookings.find({"user":req.user.id})
    // console.log('bookings',bookings)

    res.status(200).json({
        success:true,
        bookings
    })
}

