const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    
    userdetail: {
        username:{
            type:String,
            required: true
            //since we have not make our username as unique, we wont be using username for login
        },
        email:{
            type:String,
            required: true,
               
        },
        address:{
            type: String,
            // required: true
        },
        phoneNo:{
            type: Number,
            // required: true
        },
        country:{
            type:String,
            // required:true
        },
        
        

    },//user is seperated because we have to pass the user as req.user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    // booking item means which homestay s/he booked
    bookingDetail:{
        homeStayName:{
            type: String,
            required: true
        },
        noOfGuests:{
            type: Number,
            required: true
        },
        price:{
            type: String,
            required: true
        },
        // price:{
        //     type: Number,
        //     required: true
        // },
        homeStayId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'hotel'
        }, 
    },
    paymentInfo:{
        id:{
            type:String,
        },
        status:{
            type: String
        }
    },
    paidAt:{
        type: Date
    },
    // taxPrice:{ 
    //     type: Number,
    //     require: true,
    //     default: 0.0
    // },
    // totalPrice:{
    //     type: Number,
    //     require: true,
    //     default: 0.0
    // },
    orderStatus:{
        type: String,
        require: true,
        default: 'Processing'
    },
    createdAt:{
        type:Date,
        default: Date.now
    }



})


module.exports=  mongoose.model("Bookings", bookingSchema)