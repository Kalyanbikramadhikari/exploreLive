import React from 'react'

const SearchBar = () => {
  return (
    <div className='search'>
        {/* <div>

        </div> */}
        <div className='flex p-2 w-96 bg-gray-400'>
            <input className='p-2 w-72 outline-none' type="text" placeholder='Search by homestay or city'/>
            <button className='text-white text-lg font-bold bg-amber-400  p-2 px-4'>Search</button>
        </div>
        {/* <div>

        </div> */}

    </div>
    
  )
}

export default SearchBar