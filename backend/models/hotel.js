const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true 
    },
    photos:{
        type:[String]// each item inside will be a string
    },
    distance:{
        type:Number,
        
    },
    description:{
        type: String,
        required:true
    }, 
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],

    },
    cheapestPrice:{
        type: Number,
        required: true
    }, 
    featured:{
        type:Boolean,
        default: false
    }


})


module.exports=  mongoose.model("Hotel", hotelSchema)