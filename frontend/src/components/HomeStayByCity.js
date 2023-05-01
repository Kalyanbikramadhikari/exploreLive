import React from 'react'
import { Link } from 'react-router-dom'

const HomeStayByCity = () => {
  return (
    <div className='mt-10 ml-10'>
        <h4>Explore By city</h4>
        {/* flex-wrap */}
        <div className='flex space-x-7 '>
            <Link to="/singlehomestay">
            <div className='flex flex-col relative'>
                
                <img className='h-48 w-80 object-cover' src="images/ktm.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Kathmandu</span>
            </div>
            </Link>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/bkt.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Bhaktapur</span>
            </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/lalitpur.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Lalitpur</span>
            </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/pokhara.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Pokhara</span>
            </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/chitwan.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Chitwan</span>
            </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/solu.jpg" alt="" />
                <span className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl'>Solukhumbu</span>
            </div>
        </div>
    </div>
  )
}

export default HomeStayByCity