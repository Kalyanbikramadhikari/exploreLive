import React from 'react'
import Navbar from './Navbar'

const BookStay = () => {
  return (
    <div className=''>
        <div className=''>
            <Navbar/>

        </div>
        <div className='flex m-10'>
            
            <div className='rounded-xl shadow-md bg-white  sticky top-20 h-120 w-128 pb-3'>
                {/* left box */}
                <img className='w-full h-40 object-cover rounded-t-xl ' src="images/stay1.jpg" alt="" />
                <div className='p-4 space-y-1'>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Check In:</span>
                        <span className='text-base font-semibold text-gray-500'>2023/09/02</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Check Out:</span>
                        <span className='text-base font-semibold text-gray-500'>2023/09/03</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Days:</span>
                        <span className='text-base font-semibold text-gray-500'>3</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Guests:</span>
                        <span className='text-base font-semibold text-gray-500'>2</span>
                    </div>

                    
                </div>
                <div className='px-4'>
                    <span className='text-lg font-bold'>Price Details</span>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Home Stay:</span>
                        <span className='text-base font-semibold '>$121</span>
                    </div>

                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold '>Total Price:</span>
                        <span className='text-base font-semibold '>$121</span>
                    </div>

                </div>

                
                <div className='flex justify-center'>
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Proceed To Checkout</button>

                </div>

            </div>

            <div className='ml-10 flex flex-col gap-5  flex-grow '>
                {/* right box */}
                <div className="flex flex-col flex-grow bg-white rounded-lg p-4 gap-2 shadow-md">
                    <span className='font-semibold text-2xl '>Additional Services</span>

                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="radio" />
                        <span className='text-base font-semibold text-gray-600'>Cultural Site Visit</span>
                        <span>$15(per group)</span>
                        <span>$15</span>

                    </div>
                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="radio" />
                        <span className='text-base font-semibold text-gray-600'>Hiking</span>
                        <span>$15(per group)</span>
                        <span>$15</span>

                    </div>
                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="radio" />
                        <span className='text-base font-semibold text-gray-600'>Waterfall Visit</span>
                        <span>$15(per group)</span>
                        <span>$15</span>

                    </div>
                </div>

                <div className="flex flex-col  flex-grow bg-white rounded-lg p-4 gap-2 shadow-md">
                    <span className='font-semibold text-2xl '>Guest Details</span>
                    <div className='flex grid grid-cols-2 gap-3 gap-x-24'>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='First Name. . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Last Name . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="email" className='outline-none' placeholder='Email . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        
                        

                    </div>
                    
                    
                </div>
                <div className="flex flex-col  flex-grow bg-white rounded-lg p-4 gap-2 shadow-md">
                    <span className='font-semibold text-2xl '>Special Request</span>
                    <textarea className='border border-black rounded-md p-1 px-2 outline-none' name="" id="" cols="30" rows="10"></textarea>

                </div>

                <div className='flex  justify-end'>
                    <button className='p-2 px-6 rounded-md bg-cyan-600 text-white text-base' type="button">Submit</button>
                </div>


            </div>

            
            

        </div>
    </div>
  )
}

export default BookStay