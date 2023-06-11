import React from 'react'
import { Link } from 'react-router-dom'
import { useGetFeaturedCitiesQuery } from '../features/APISlices/homeStayAPI'

const FeaturedCity = () => {
    const {data, isLoading, error} =useGetFeaturedCitiesQuery()
    const item = data && data.items
    const cities = data && data.city
    // console.log('items', item)

    

  return (
    <div className='mt-10 ml-10'>
        <span className='border-2 p-1  text-lg bg-slate-200 rounded-md'>Explore By city</span>
        {/* flex-wrap */}
        <div className='flex space-x-7 mt-3'>
            <Link to="/homestaysincity/kathmandu">
            <div className='flex flex-col relative'>
                
                <img className='h-48 w-80 object-cover' src="images/ktm.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >Kathmandu</span>
                    <span>{item&&item&&item[0] } Homestays</span>
                </div>
                
            </div>
            </Link>

            <Link to="/homestaysincity/Bhaktapur">
                <div className='flex flex-col relative'>
                    <img className='h-48 w-80 object-cover' src="images/bkt.jpg" alt="" />
                    <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                        <span >Bhaktapur</span>
                        <span>{item&&item[1] } Homestays</span>
                    </div>            
                </div>
            </Link>

            <Link to="/homestaysincity/Lalitpur">
                <div className='flex flex-col relative'>
                    <img className='h-48 w-80 object-cover' src="images/lalitpur.jpg" alt="" />
                    <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                        <span >Laliptur</span>
                        <span>{item&&item[2] } Homestays</span>
                    </div> 
                </div>
            </Link>
            
            <Link to="/homestaysincity/Pokhara">
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/pokhara.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >Pokhara</span>
                    <span>{item&&item[3] } Homestays</span>
                </div>
            </div>
            </Link>
            

            <Link to="/homestaysincity/Chitwan">
                <div className='flex flex-col relative'>
                    <img className='h-48 w-80 object-cover' src="images/chitwan.jpg" alt="" />
                    <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                        <span >Chitwan</span>
                        <span>{item&&item[4] } Homestays</span>
                    </div>
                </div>
            </Link>

            {/* <Link to="/homestaysincity/Chitwan">
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/chitwan.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >Chitwan</span>
                    <span>{item&&item[4] } Homestays</span>
                </div>
            </div>
            </Link> */}
            

            <Link to="/homestaysincity/Solukhumbu">
                <div className='flex flex-col relative'>
                    <img className='h-48 w-80 object-cover' src="images/solu.jpg" alt="" />
                    <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                        <span >Solukhumbu</span>
                        <span>{item&&item[5] } Homestays</span>
                    </div>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default FeaturedCity