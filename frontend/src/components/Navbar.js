import React from 'react'

const Navbar = ({prop}) => {
  return (
    <div className='flex ml-10 space-x-20 items-center mr-10' >
        <div>
            <img className='h-12 ' src="images/logo1.jpeg" alt="" />
        </div>
        <div className='flex space-x-20 flex-grow  font-bold{{prop?t}} text-white text-lg justify-evenly'>
            <span>HomeStays</span>
            <span>Hiking</span>
            <span>About</span>
        </div>
        <div className='space-x-8 flex justify-center items-center '>
          <div>
            <button className='p-2 px-8 rounded-xl bg-amber-400 text-sm '>Sign In</button>

          </div>
          <div>
            <button className='p-2 px-8 rounded-xl bg-amber-400 text-sm '>Sign Up</button>

          </div>
        </div>
    </div>
  )
}

export default Navbar