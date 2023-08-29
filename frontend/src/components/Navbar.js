import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../features/ReducerSlices/authSlice'

const Navbar = ({isHomePage=true}) => {

  const data = useSelector((state)=>state.auth)
  const dispatch = useDispatch()

  const usernamee = data && data.user.username
  const firstname = usernamee && usernamee.split(' ').slice(0,-2).join(' ')

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log('firstname', firstname)
  console.log('Navbardata', data)
  const logoutHandler=(e)=>{
    dispatch(logout())

  }
  return (
    <div className='flex ml-10 space-x-20 items-center mr-10' >
        <Link to='/'>
          <div>
              <img className='h-12 ' src="images/logo1.jpeg" alt="" />
          </div>
        </Link>
        
        {/* <div className='flex space-x-20  flex-grow  font-bold{{prop?t}} text-white text-lg space-x-52 '> */}
        
        <div className={isHomePage?' flex space-x-20  flex-grow  font-bold text-white text-lg space-x-52 ': 'flex space-x-20  flex-grow  font-bold text-black text-lg space-x-52'   }>
          <Link to='/homestays'>
            <span>HomeStays</span>
            </Link>
            <span>Hiking</span>
          <Link to='/about-us'>
            <span>About</span>
          </Link>
        </div>
        {
          data.user.username? 
          <div className=''>
            <div className='flex space-x-2 bg-cyan-600 p-1 rounded ' onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
              <span className='font-bold text-white text-lg'>{firstname}</span>
              <img className='h-8 w-8 object-cover rounded-full' src="images/ktm.jpg" alt="" />
              <i className="fa-solid fa-caret-down mt-2 text-white"></i>
            </div>

            {
              data.user.isAdmin ? 
              <div onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)} className={`absolute flex flex-col bg-white p-2 ${isDropdownOpen ? "block" : "hidden"}`}>
                <Link to="/createhomestay">
                  <button className='py-2 p-2 mt-1 bg-amber-400 text-sm ' >Add Homestay</button>
                </Link>< hr/>
                <Link to="/admin/allbookings">
                  <button className='py-2 p-2 mt-1 bg-amber-400 text-sm ' >View Bookings</button>
                </Link>< hr/>
                <Link to="/">
                  <button className='p-2 px-8 mt-1 bg-amber-400 text-sm' onClick={logoutHandler}>Logout</button>
                </Link>
              </div>:
                  
              
              <div onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)} className={`absolute flex flex-col bg-white p-2 ${isDropdownOpen ? "block" : "hidden"}`}>
                
                <Link to="/bookings">
                  <span className='py-2 '>Bookings</span>
                </Link> <hr/>
                <Link to="/">
                  <button className='p-2 px-8 mt-1 bg-amber-400 text-sm'>Logout</button>
                </Link>
              </div>
            }
            <div className='hidden'>
              

            </div>
          </div>:
      <div className='space-x-8 flex justify-center items-center '>
      <Link to="/signin">
      <div>
        <button className='p-2 px-8 rounded-xl bg-amber-400 text-sm '>Sign In</button>

      </div>
      </Link>
      <Link to="/signup">
      <div>
        <button className='p-2 px-8 rounded-xl bg-amber-400 text-sm '>Sign Up</button>

      </div>
      </Link>
    </div>
        }
        
        
        
    </div>
  )
}

export default Navbar