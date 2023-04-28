import React from 'react'
import Navbar from './Navbar'

const HomeStayInCity = () => {
    
  return (

    <div className='  '>
        <div >
        <Navbar prop ="black"/>

        </div>
        <div className='ml-10'>
            <span>Homestays in Kathmandu</span>
        

            <div className='flex'>
                <div>

    {/* left side box */}
                </div>
                <div className='flex flex-col ml-auto space-y-8'>
{/* right side boxes */}
                    <div className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
                        <div className='flex items-center'>
                            <img className='h-56 w-96 object-cover' src="images/stay1.jpg" alt="" />
                        </div>
                        <div className='flex flex-col w-2/3 '>
                            <div className='flex justify-between items-start '>
                                <span className='text-lg font-semibold'>Tokha Home Stay</span>
                                <span> <span className='text-lg font-bold
                                '>$24</span> <span className='text-gray-400 text-xs'>per Night</span></span>
                            </div>
                            <span className='text-xs'>10.5 km from TIA (Tribhuvan International Airport).</span>
                            <div className='flex justify-between items-end  mt-auto text-lg'>
                                <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i class="fa-solid fa-eye"></i> </button>
                                <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button>

                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
                        <div className='flex items-center'>
                            <img className='h-56 w-96 object-cover' src="images/stay1.jpg" alt="" />
                        </div>
                        <div className='flex flex-col w-2/3 '>
                            <div className='flex justify-between items-start '>
                                <span className='text-lg font-semibold'>Tokha Home Stay</span>
                                <span> <span className='text-lg font-bold
                                '>$24</span> <span className='text-gray-400 text-xs'>per Night</span></span>
                            </div>
                            <span className='text-xs'>10.5 km from TIA (Tribhuvan International Airport).</span>
                            <div className='flex justify-between items-end  mt-auto text-lg'>
                                <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i class="fa-solid fa-eye"></i> </button>
                                <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button>

                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
                        <div className='flex items-center'>
                            <img className='h-56 w-96 object-cover' src="images/stay1.jpg" alt="" />
                        </div>
                        <div className='flex flex-col w-2/3'>
                            <div className='flex justify-between items-start '>
                                <span className='text-lg font-semibold'>Tokha Home Stay</span>
                                <span> <span className='text-lg font-bold
                                '>$24</span> <span className='text-gray-400 text-xs'>per Night</span></span>
                            </div>
                            <span className='text-xs'>10.5 km from TIA (Tribhuvan International Airport).</span>
                            <div className='flex justify-between items-end  mt-auto text-lg'>
                                <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i class="fa-solid fa-eye"></i> </button>
                                <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button>

                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default HomeStayInCity