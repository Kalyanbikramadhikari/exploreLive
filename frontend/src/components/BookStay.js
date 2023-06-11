import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { proceedToCheckout } from '../features/ReducerSlices/homeStaySlice'


const BookStay = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.auth)
    const usernamee = data && data.user.username
    const {email,id} = data && data.user

    const firstname = usernamee && usernamee.split(' ').slice(0,-2).join(' ')
    const lastname  = usernamee && usernamee.split(' ').slice(1,2).join(' ')

    const [culturalsiteprice, setCulturalSitePrice] = useState(0)
    
    const [hikingprice, sethikingprice] = useState(0)
    const [waterfall, setWaterfall] = useState(0)

    const {checkIn, checkOut,guests, additionalUserDetail} = useSelector((state)=>state.homestay)
    // console.log('data', data)

    const date1 = new Date(checkIn)
    const date2 = new Date(checkOut)
    const diffInMilliseconds = Math.abs(date2 - date1);
    const days = Math.floor(diffInMilliseconds / 86400000);
    // console.log('diffInDays', diffInDays)


    //phone number, address and country value assigning

    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [specailRequest, setSpecialRequest] = useState('')

    

    const handleCheckBox1 = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        console.log('value,checked', value,checked)

        if(checked){
            setCulturalSitePrice(parseInt(value))
            // console.log('value', value)
            // console.log('culturalsiteprice', culturalsiteprice)// notice here that the function call is being called first so this statement is not shown instead setculturalprice is shown to 0.

        }else{
            setCulturalSitePrice(0)
            // console.log('culturalsiteprice', culturalsiteprice)
        }


    }
    console.log('culturalsiteprice', typeof( waterfall))
    console.log('typeof(culturalsiteprice;', typeof(culturalsiteprice))
    const handleCheckBox2 = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        // console.log('value,checked', value,checked)

        if(checked){
            sethikingprice(parseInt(value))
            // console.log('value', value)
            // console.log('culturalsiteprice', culturalsiteprice)// notice here that the function call is being called first so this statement is not shown instead setculturalprice is shown to 0.

        }else{
            sethikingprice(0)
            // console.log('culturalsiteprice', culturalsiteprice)
        }


    }

    const handleCheckBox3=(e)=>{
        
        const value = e.target.value
        const checked = e.target.checked
        console.log('first', checked)

        if(checked){
            setWaterfall(parseInt(value))
        }
        else{
            setWaterfall(0)
        }
    }

    const handleProceedToCheckout =(e)=>{
        dispatch(proceedToCheckout({total ,phoneNumber,address,country,specailRequest }))
    }

    const total = 121 + culturalsiteprice+ hikingprice+ waterfall
   
    // 
    console.log('waterfall', waterfall)

    

    

  return (
    <div className=''>
        <div className=''>
        <Navbar isHomePage={false}/>
            

        </div>
        <div className='flex m-10'>
            
            <div className='rounded-xl shadow-md bg-white  sticky top-20 h-120 w-128 pb-3'>
                {/* left box */}
                <img className='w-full h-40 object-cover rounded-t-xl ' src="images/stay1.jpg" alt="" />
                <div className='p-4 space-y-1'>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Check In:</span>
                        <span className='text-base font-semibold text-gray-500'>{checkIn}</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Check Out:</span>
                        <span className='text-base font-semibold text-gray-500'>{checkOut}</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Days:</span>
                        <span className='text-base font-semibold text-gray-500'>{days || 0}</span>
                    </div>
                    <div className='flex w-full justify-between'>
                        <span className='text-base font-semibold text-gray-600'>Guests:</span>
                        <span className='text-base font-semibold text-gray-500'>{guests}</span>
                    </div>

                    
                </div>
                <div className='px-4'>
                    <span className='text-lg font-bold'>Price Details</span>
                    {
                        culturalsiteprice & culturalsiteprice!== 0 ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Cultural Site Visit:</span>
                            <span className='text-base font-semibold '>${culturalsiteprice}</span>
                        </div>
                        
                            
                        :
                        <div></div> 
                        
                    }
                    

                    {
                        waterfall  ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Waterfall:</span>
                            <span className='text-base font-semibold '>${waterfall}</span>
                        </div>
                        
                            
                        :
                        <div></div> 
                        
                    }
                    
                    {
                        hikingprice & hikingprice!== 0 ? 
                        <div className='flex w-full justify-between'>
                            <span className='text-base font-semibold text-gray-600'>Hiking:</span>
                            <span className='text-base font-semibold '>${hikingprice}</span>
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
                            {/* <span className='text-base font-semibold '>{121 + culturalsiteprice + waterfall +hikingprice}</span> */}
                            <span className='text-base font-semibold '>{total}</span>

                    </div>

                </div>

                
                {/* <div className='flex justify-center'>
                    <Link to ="/checkout">
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Proceed To Checkout</button>
                 </Link>
                </div> */}

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
                            <input type="text" className='outline-none' placeholder='First Name. . .' value={firstname}/>
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Last Name . . .' value={lastname} />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="email" className='outline-none' placeholder='Email . . .' value={email} />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Address . . .' onChange={(e)=>setAddress(e.target.value)} />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Country . . .' onChange={(e)=>setCountry(e.target.value)}/>
                        </div>
                        {/* <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div>
                        <div className="flex justify-between border border-black rounded-md p-1 px-2 pr-20">
                            <input type="text" className='outline-none' placeholder='Phone Number . . .' />
                        </div> */}
                        
                        

                    </div>
                    
                    
                </div>
                <div className="flex flex-col  flex-grow bg-white rounded-lg p-4 gap-2 shadow-md">
                    <span className='font-semibold text-2xl '>Special Request</span>
                    <textarea className='border border-black rounded-md p-1 px-2 outline-none' name="" id="" cols="30" rows="10" onChange={(e)=>setSpecialRequest(e.target.value)}></textarea>

                </div>

                {/* <div className='flex  justify-end'>
                    <button className='p-2 px-6 rounded-md bg-cyan-600 text-white text-base' type="button" onClick={handleProceedToCheckout}>Procced To Checkout</button>
                </div> */}

                <div className='flex justify-center'>
                    <Link to ="/checkout">
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button" onClick={handleProceedToCheckout}>Proceed To Checkout</button>
                 </Link>
                </div>


            </div>

            
            

        </div>
    </div>
  )
}

export default BookStay