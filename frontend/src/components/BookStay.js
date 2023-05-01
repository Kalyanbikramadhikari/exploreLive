import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const BookStay = () => {
    const [culturalsiteprice, setCulturalSitePrice] = useState()
    const [hikingprice, sethikingprice] = useState()
    const [waterfall, setwaterfall] = useState()

    


    const handleCheckBox1 = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        console.log('value,checked', value,checked)

        if(checked){
            setCulturalSitePrice([15])
            // console.log('value', value)
            // console.log('culturalsiteprice', culturalsiteprice)// notice here that the function call is being called first so this statement is not shown instead setculturalprice is shown to 0.

        }else{
            setCulturalSitePrice([''])
            // console.log('culturalsiteprice', culturalsiteprice)
        }


    }
    const handleCheckBox2 = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        // console.log('value,checked', value,checked)

        if(checked){
            sethikingprice([value])
            // console.log('value', value)
            // console.log('culturalsiteprice', culturalsiteprice)// notice here that the function call is being called first so this statement is not shown instead setculturalprice is shown to 0.

        }else{
            sethikingprice([''])
            // console.log('culturalsiteprice', culturalsiteprice)
        }


    }
    const handleCheckBox3 = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        // console.log('value,checked', value,checked)

        if(checked){
            setwaterfall([8])
            // console.log('value', value)
            // console.log('culturalsiteprice', culturalsiteprice)// notice here that the function call is being called first so this statement is not shown instead setculturalprice is shown to 0.

        }else{
            setwaterfall([''])
            // console.log('culturalsiteprice', culturalsiteprice)
        }


    }
   
    // 
    console.log('waterfall', waterfall)

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
                    {
                        culturalsiteprice & culturalsiteprice!== '' ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Cultural Site Visit:</span>
                            <span className='text-base font-semibold '>${culturalsiteprice}</span>
                        </div>
                        
                            
                        :
                        <div></div> 
                        
                    }

                    
                    
                    {
                        hikingprice & hikingprice!== '' ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Hiking:</span>
                            <span className='text-base font-semibold '>${hikingprice}</span>
                        </div>
                        
                            
                        :
                        <div></div> 
                        
                    }
                    {
                        waterfall ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Water fall visit:</span>
                            <span className='text-base font-semibold '>${waterfall}</span>
                        </div>
                        
                            
                        :
                        <div></div> 
                        
                    }
                    
                    
                    
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Home Stay:</span>
                        <span className='text-base font-semibold '>$121</span>
                    </div>

                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold '>Total Price:</span>
                        <span className='text-base font-semibold '></span>
                    </div>

                </div>

                
                <div className='flex justify-center'>
                    <Link to ="/checkout">
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Proceed To Checkout</button>
                 </Link>
                </div>

            </div>

            <div className='ml-10 flex flex-col gap-5  flex-grow '>
                {/* right box */}
                <div className="flex flex-col flex-grow bg-white rounded-lg p-4 gap-2 shadow-md">
                    <span className='font-semibold text-2xl '>Additional Services</span>

                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="checkbox" value='15' onClick={handleCheckBox1}/>
                        <span className='text-base font-semibold text-gray-600'>Cultural Site Visit</span>
                        <span>$15(per group)</span>
                        <span>$15</span>

                    </div>
                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="checkbox" value={25} onClick={handleCheckBox2} />
                        <span className='text-base font-semibold text-gray-600'>Hiking</span>
                        <span>$25(per group)</span>
                        <span>$25</span>

                    </div>
                    <div className="flex justify-between border border-black rounded-md p-2 pr-20">
                        <input type="checkbox" value='8' onClick={handleCheckBox3} />
                        <span className='text-base font-semibold text-gray-600'>Waterfall Visit</span>
                        <span>$8(per group)</span>
                        <span>$8</span>

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