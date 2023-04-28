import React from 'react'
import Navbar from './Navbar'

const Checkout = () => {
  return (
    <div className=''>
        <div className=''>
            <Navbar/>

        </div>
        <div className='flex ml-80 mt-5'>
            <span className=' flex font-semibold text-3xl '>Checkout</span>
        </div>
        
        <div className='flex ml-10 mt-3'>

            <div className='rounded-xl shadow-md bg-white  sticky top-20 h-120 w-128 pb-3 p-8 space-y-4'>
                {/* left box */}
                <span className=' flex font-semibold text-2xl '>Payment Options</span>

                
                <div className='flex flex-wrap gap-7'>
                    <div className=''>
                        <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/unnamed.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/khalti.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/paypal.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-center'>
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Pay Now</button>

                </div>

            </div>

            
            <div className='ml-10 flex flex-col gap-5  flex-grow mr-10 bg-white rounded-lg p-4 gap-2 shadow-md h-60'>
                {/* right box */}
                <span className=' flex font-semibold text-2xl   text-gray-600'>Your Summary</span>
                <div className="flex grid grid-cols-2 ml-5 gap-2">
                    <div className="flex space-x-6">
                        <span className='text-base font-semibold text-gray-400 '>Full Name:</span>
                        <span className='text-base font-semibold text-gray-800'>Sujit Gautam</span>
                    </div>
                    <div className="flex space-x-14">
                        <span className='text-base font-semibold text-gray-400 '>Email:</span>
                        <span className='text-base font-semibold text-gray-800'>tkandel37@gmail.com</span>
                       
                    </div>
                    <div className="flex space-x-10">
                        <span className='text-base font-semibold text-gray-400 '>Address:</span>
                        <span className='text-base font-semibold text-gray-800'>Kathmandu</span>
                    </div>
                    <div className="flex space-x-10">
                        <span className='text-base font-semibold text-gray-400 '>Country:</span>
                        <span className='text-base font-semibold text-gray-800'>Nepal</span>
                       
                    </div>
                    <div className="flex space-x-12">
                        <span className='text-base font-semibold text-gray-400 '>Guests:</span>
                        <span className='text-base font-semibold text-gray-800'>3</span>
                    </div>
                    <div className="flex space-x-16">
                        <span className='text-base font-semibold text-gray-400 '>Days:</span>
                        <span className='text-base font-semibold text-gray-800'>2</span>
                       
                    </div>
                    <div className="flex space-x-8">
                        <span className='text-base font-semibold text-gray-400 '>Check IN:</span>
                        <span className='text-base font-semibold text-gray-800'>2023/09/02</span>
                    </div>
                    <div className="flex space-x-5">
                        <span className='text-base font-semibold text-gray-400 '>Check OUT:</span>
                        <span className='text-base font-semibold text-gray-800'>2023/09/03</span>
                       
                    </div>
                    <div className="flex space-x-5">
                        <span className='text-base font-semibold text-gray-400 '>Total Price:</span>
                        <span className='text-base font-semibold text-gray-800'>$332</span>
                    </div>
                    {/* <div className="flex space-x-7">
                        <span className='text-base font-semibold text-gray-400 '>Email:</span>
                        <span className='text-base font-semibold text-gray-800'>tkandel37@gmail.com</span>
                       
                    </div> */}
                    
                </div>


            </div>
        </div>
    </div>
  )
}

export default Checkout