const Hotel = require('../models/hotel')
const ErrorHandler = require('../utils/errorHandler')

// creating a new hotel => /api/hotels/new
module.exports.newHotel = async (req,res)=>{
    console.log('req.user.id', req.user.id)
    // //need to know how user comes here
    req.body.user = req.user.id
    // console.log('req.body',req.body)
    const newHotell = await Hotel.create(req.body)
// 201 is the created status
    res.status(201).json({
        success: true,
        newHotell
    })
}

//get all hotels =>/api/hotels
module.exports.gethotel=async(req,res)=>{
    console.log('req.user',req.user)
    

    console.log('insidegetallhotels')
    const minimum = req.query.min 
    const maximum = req.query.max
    const priceOrder = req.query.price_order
    // console.log(typeof(priceOrder))

    if(req.query.price_order === 'true'){
        console.log('into ascending order')
        const homestays = await Hotel.find({ cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:1})
        const counthotels = await Hotel.countDocuments() 

        // console.log(counthotels)
    res.status(200).json({
        success:true,
        homestays,
        counthotels
    })
    }else if(req.query.desc_order==='true'){
        const homestays = await Hotel.find({ cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:-1})
            const counthotels = await Hotel.countDocuments() 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_asc==='true'){
        console.log('into distance ascending')
        const homestays = await Hotel.find({ cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:1})
            const counthotels = await Hotel.countDocuments() 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_desc==='true'){
        console.log('into distance ascending')
        const homestays = await Hotel.find({ cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:-1})
            const counthotels = await Hotel.countDocuments() 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }
    
    else{
        console.log('into else')
        // const homestays = await Hotel.find({ cheapestPrice:{$gte:minimum , $lte:maximum} })
        const homestays = await Hotel.find()
        const counthotels = await Hotel.countDocuments() 
        console.log(counthotels)
        res.status(200).json({
            success:true,
            homestays,
            counthotels
        })

    }
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
//get all homestays in city => api/hotels/homestaysincity/:city
module.exports.gethomestaysincity = async(req,res)=>{
    console.log('into homestays in city')

    // const city = req.params.city
    console.log(req.params.city)
    console.log(req.params.desc_order)
    // console.log(req.query.min, req.query.max, req.query.price_order)

    const minimum = req.query.min 
    const maximum = req.query.max
    const priceOrder = req.query.price_order
    // console.log(typeof(priceOrder))

    if(req.query.price_order === 'true'){
        console.log('into ascending order')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:1})
        const counthotels = await Hotel.countDocuments({"city":req.params.city}) 

        // console.log(counthotels)
    res.status(200).json({
        success:true,
        homestays,
        counthotels
    })
    }else if(req.query.desc_order==='true'){
        console.log('into descending')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:-1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_asc==='true'){
        console.log('into distance ascending')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_desc==='true'){
        console.log('into distance descending')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:-1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }
    
    else{
        console.log('into else')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} })
    const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    console.log(counthotels)
    res.status(200).json({
        success:true,
        homestays,
        counthotels
    })

    }
    // else{
    //     const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:-1})
    //     const counthotels = await Hotel.countDocuments({"city":req.params.city}) 

    //     console.log(counthotels)
    //     res.status(200).json({
    //         success:true,
    //         homestays,
    //         counthotels
    //     })
    // }
    
    // console.log('minimum, maximum', minimum, maximum)
        //this below will not sort according to price but will show as first registered first 
        // this will be the default
    
}

//get single hotel => api/hotels/:id
module.exports.getSingleHotel = async(req,res)=>{
    // console.log('hi')
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const hotel = await Hotel.findById(req.params.id)
    
    if(!hotel){
        res.status(404).json({
            success:false,
            message: "Hotel not found"
        })
    }
    // console.log('hi')
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
//get  homestays in city => api/hotels/homestaysincity/city_name


module.exports.getCountByType = async(req,res)=>{
    console.log('hello')
    const data = await Hotel.find()
    res.status(200).json({
        succes:true,
        data

    })
}






// this will count no of hotels in any city from the query but one at a time
// api/hotels/countByCity
module.exports.countByCity = async(req,res)=>{
    // console.log('hi')

    const city = req.query.city
    const item = await Hotel.countDocuments({city:city})
    // console.log('item', item)
    // console.log('city', city)

    res.status(200).json({
        success:true,
        item
        
    })

}
// api/hotels/countByCities?cities = kathmandu,Dhulikhel,Bhaktapur,
module.exports.countByCities = async(req,res)=>{
    console.log('hi')

    const city = req.query.cities.split(",")// this will give array of cities from query

    const items = await Promise.all(city.map((item)=>{
        return Hotel.countDocuments({city:item})
    }))
    console.log('item', items)
    console.log('city', city)

    res.status(200).json({
        success:true,
        items,
        city
        
    })

}

//api/hotels/search?city=city_name
module.exports.searchByCity = async(req,res)=>{

    const city = req.query.city
    console.log('hello city', city)
    //later we can even do search by homestay name
    //const homestay = req.query.homestay for this we need to send query from frontend

    const minimum = req.query.min 
    const maximum = req.query.max
    const priceOrder = req.query.price_order
    // console.log(typeof(priceOrder))

    if(req.query.price_order === 'true'){
        console.log('into ascending order')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:1})
        const counthotels = await Hotel.countDocuments({"city":req.params.city}) 

        // console.log(counthotels)
    res.status(200).json({
        success:true,
        homestays,
        counthotels
    })
    }else if(req.query.desc_order==='true'){
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({cheapestPrice:-1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_asc==='true'){
        console.log('into distance ascending')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }else if(req.query.distance_desc==='true'){
        console.log('into distance ascending')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} }).sort({distance:-1})
            const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    
            console.log(counthotels)
            res.status(200).json({
                success:true,
                homestays,
                counthotels
            })
    }
    
    else{
        console.log('into else')
        const homestays = await Hotel.find({"city":req.params.city, cheapestPrice:{$gte:minimum , $lte:maximum} })
    const counthotels = await Hotel.countDocuments({"city":req.params.city}) 
    console.log(counthotels)
    res.status(200).json({
        success:true,
        homestays,
        counthotels
    })

    }

}




//api/hotels/homestaysincity/city_name?min_price=100&max_price=2000
module.exports.minmax = async(req,res)=>{

    const minimum = req.query.min_price
    const maximum = req.query.max_price

    const newcities = await Hotel.find({cheapestPrice:{$gte:minimum, $lte:maximum}})

    res.status(200).json({
        success: true,
        newcities
    })

}


module.exports.postUserDetails = async(req,res,next)=>{

    // const userData = await  
}
