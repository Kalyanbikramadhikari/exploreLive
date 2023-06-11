import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between bg-gray-600 mt-10 p-5 px-10 pr-10'>
        <div>
            <span className='text-white text-lg font-semibold'>COMPANY</span>
            <div className='flex flex-col mt-7'>
                <span className='text-gray-400 font-semibold text-lg'>About Us</span>
                <span className='text-gray-400 font-semibold text-lg'>Contact</span>
            </div>
        </div>
        <div>
        <span className='text-white text-lg font-semibold'>DISCOVER</span>
        <div className='flex flex-col mt-7'>
                <span className='text-gray-400 font-semibold text-lg'>Homestays</span>
                {/* <span className='text-gray-400 font-semibold text-lg'>Contact</span> */}
            </div>
        </div>
        <div>
        <span className='text-white text-lg font-semibold'>CONNECT</span>
        <div className='flex flex-col mt-7'>
                <span className='text-gray-400 font-semibold text-lg'><i className="fa-solid fa-location-dot mr-2"></i> Samakushi,Kathmandu,Nepal</span>
                <span className='text-gray-400 font-semibold text-lg'><i className="fa-solid fa-phone mr-2">  +977 01-52589</i> </span>
            </div>
        </div>
        <div>
        <span className='text-white text-lg font-semibold'>FOLLOW US</span>
            <div className='space-x-3 mt-7'>
            <i className="fa-brands fa-facebook text-gray-400 text-xl"></i>
            <i className="fa-brands fa-instagram text-gray-400 text-xl"></i>
            <i className="fa-brands fa-twitter  text-gray-400 text-xl"></i>
            <i className="fa-brands fa-linkedin  text-gray-400 text-xl"></i>
            <i className="fa-brands fa-youtube text-gray-400 text-xl"></i>

            </div>
        </div>

    </div>
  )
}

export default Footer