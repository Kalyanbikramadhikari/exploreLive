const Hotel = require('../models/hotel')
const ErrorHandler = require('../utils/errorHandler')

// creating a new hotel => /api/hotels/new
module.exports.newHotel = async (req,res)=>{
    const newHotell = await Hotel.create(req.body)
// 201 is the created status
    res.status(201).json({
        success: true,
        newHotell
    })
}


//get all hotels =>/api/hotels
module.exports.gethotel=async(req,res)=>{

    const allhotel = await Hotel.find()
    res.status(200).json({
        succes: true,
        message: 'this will show all the hotels from the database',
        allhotel
    })
}


//update a hotel=>api/hotels/update/:id
module.exports.updateHotel = async(req,res,next)=>{
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const hotel = await Hotel.findById(req.params.id)
        
        if(!hotel){
            return next(new ErrorHandler('Hotel not found', 404))
        }else{
            const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{
                new: true,
                // runValidators: true,
                // useFindAndModify: false
            });
        
            res.status(200).json({
                sucess: true,
                updatedHotel
            })
        }
        
    }else{
        return next(new ErrorHandler('wrong id',404))
    }
    

    


}

//delete a hotel=> api/hotel/delete/:id
module.exports.deleteHotel = async(req,res,next)=>{
 const hotel = await Hotel.findById(req.params.id);
    console.log('hotel', hotel)
    if(!hotel){
        return res.status(404).json({
            success:false,
            message: 'hotel not found'
        })
    }
    // await hotel.remove() // for this i received an error saying :TypeError: hotel.remove is not a function
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: 'hotel deleted'
    })
}


//get single hotel => api/hotels/:id
module.exports.getSingleHotel = async(req,res)=>{
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const hotel = await Hotel.findById(req.params.id)
    
    if(!hotel){
        res.status(404).json({
            success:false,
            message: "Hotel not found"
        })
    }
    res.status(200).json({
        sucess:true,
        hotel
    })
    }

    else{
        res.status(404).json({
            success:false,
            message: "wrong Id"
        })
    }
    
}

