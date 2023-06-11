import React from 'react'
import { Link } from 'react-router-dom'

const Religioniously = () => {
  return (
    <div className='mt-10 ml-10'>
        <span className='border-2 p-1  text-lg bg-slate-200 rounded-md'>Explore By Ethnic Groups</span>
        {/* flex-wrap */}
        <div className='flex space-x-7 mt-3 '>
            <Link to="/singlehomestay">
            <div className='flex flex-col relative'>
                
                <img className='h-48 w-80 object-cover' src="images/ktm.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Bhramins and Chhetris</span>
                    <span> Homestays</span>
                </div>
                
            </div>
            </Link>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/bkt.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Newars</span>
                    <span> Homestays</span>
                </div>            </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/lalitpur.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Tamangs</span>
                    <span> Homestays</span>
                </div> </div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/pokhara.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Tharus</span>
                    <span> Homestays</span>
                </div></div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/chitwan.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Magars</span>
                    <span> Homestays</span>
                </div></div>
            <div className='flex flex-col relative'>
                <img className='h-48 w-80 object-cover' src="images/solu.jpg" alt="" />
                <div className='absolute bottom-3 left-3 bg-gray-300 px-2 rounded-xl flex flex-col' >
                    <span >The Sherpas</span>
                    <span> Homestays</span>
                </div></div>
        </div>
    </div>
  )
}

export default Religioniously