import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [searchName, setSearchName] = useState('')

  const handleSearchChange = (e)=>{
    const name = e.target.value
    setSearchName(name)
  }
  
  // const handleSearchClicked = (e)=>{

  // }


  return (
    <div className='search'>
        {/* <div>

        </div> */}
        <div className='flex p-2 w-96 bg-gray-400'>
            <input className='p-2 w-72 outline-none' type="text" placeholder='Search homestay by city' onChange={handleSearchChange}/>
            <Link to={`/search?city=${searchName}`} >
            <button className='text-white text-lg font-bold bg-amber-400  p-2 px-4' >Search</button>
            </Link>
        </div>
        {/* <div>

        </div> */}

    </div>
    
  )
}

export default SearchBar