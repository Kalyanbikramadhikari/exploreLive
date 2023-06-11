import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

import StripeCheckout from 'react-stripe-checkout'
import { useCreateNewHomestayMutation } from '../features/APISlices/homeStayAPI'
import { Link } from 'react-router-dom'

let form = null;

const Checkout = () => {

    const userData = useSelector((state)=>state.auth.user)
    const homeStayData = useSelector((state)=>state.homestay)

    const [createNewHomestay, {data, isLoading}] = useCreateNewHomestayMutation(); 





    //esewa code
    const ESEWA_URL = "https://uat.esewa.com.np/epay/main";

    
    const [params, setParams] = useState({
        amt: 100,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: 100,
        pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
        scd: "EPAYTEST",
        su: "https://d2evy.csb.app/success",
        fu: "https://d2evy.csb.app/failed"
      });
    
      useEffect(() => {
        post();
      });
    
      const post = () => {
        form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("action", ESEWA_URL);
    
        for (var key in params) {
          var hiddenField = document.createElement("input");
          hiddenField.setAttribute("type", "hidden");
          hiddenField.setAttribute("name", key);
          hiddenField.setAttribute("value", params[key]);
          form.appendChild(hiddenField);
        }
    
        document.body.appendChild(form);
        // form.submit();
      };
    
      const handleSubmit = () => {
        form.submit();
      };
  return (
    <div className=''>
        <div className=''>
        <Navbar isHomePage={false}/>


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
                        <button className='' onClick={handleSubmit}>
                            <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/unnamed.png" alt="" />

                        </button>

                    </div>
                    <div className=''>
                        <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/khalti.png" alt="" />
                    </div>
                    <div className=''>
                    <Link to="stripepayment">
                {/* <button className='bg-blue-300'>Pay Now</button> */}
                <img className='h-28 w-28 border-2 rounded-2xl cursor-pointer' src="images/paypal.png" alt="" />

                </Link>
                    </div>
                </div>

                {/* <div className='flex justify-center'>
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Pay Now</button>

                </div> */}

            </div>

            
            <div className='ml-10 flex flex-col gap-5  flex-grow mr-10 bg-white rounded-lg p-4 gap-2 shadow-md h-60'>
                {/* right box */}
                <span className=' flex font-semibold text-2xl   text-gray-600'>Your Summary</span>
                <div className="flex grid grid-cols-2 ml-5 gap-2">
                    <div className="flex space-x-6">
                        <span className='text-base font-semibold text-gray-400 '>Full Name:</span>
                        <span className='text-base font-semibold text-gray-800'>{userData.username}</span>
                    </div>
                    <div className="flex space-x-14">
                        <span className='text-base font-semibold text-gray-400 '>Email:</span>
                        <span className='text-base font-semibold text-gray-800'>{userData.email}</span>
                       
                    </div>
                    <div className="flex space-x-10">
                        <span className='text-base font-semibold text-gray-400 '>Address:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.additionalUserDetail.Address}</span>
                    </div>
                    <div className="flex space-x-10">
                        <span className='text-base font-semibold text-gray-400 '>Country:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.additionalUserDetail.Country}</span>
                       
                    </div>
                    <div className="flex space-x-12">
                        <span className='text-base font-semibold text-gray-400 '>Guests:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.guests}</span>
                    </div>
                    <div className="flex space-x-16">
                        <span className='text-base font-semibold text-gray-400 '>Days:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.days}</span>
                       
                    </div>
                    <div className="flex space-x-8">
                        <span className='text-base font-semibold text-gray-400 '>Check IN:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.checkIn}</span>
                    </div>
                    <div className="flex space-x-5">
                        <span className='text-base font-semibold text-gray-400 '>Check OUT:</span>
                        <span className='text-base font-semibold text-gray-800'>{homeStayData.checkOut}</span>
                       
                    </div>
                    <div className="flex space-x-5">
                        <span className='text-base font-semibold text-gray-400 '>Total Price:</span>
                        <span className='text-base font-semibold text-gray-800'>Rs{homeStayData.total}</span>
                    </div>
                    {/* <div className="flex space-x-7">
                        <span className='text-base font-semibold text-gray-400 '>Email:</span>
                        <span className='text-base font-semibold text-gray-800'>tkandel37@gmail.com</span>
                       
                    </div> */}
                    
                </div>
                {/* <Link to="stripepayment">
                <button className='bg-blue-300'>Pay Now</button>
                </Link> */}
                {/* <Link to="stripepayment"> */}
                {/* <button className='bg-blue-300' onClick={handleSubmit}>Pay with esewa</button> */}
                {/* </Link> */}

                {/* <StripeCheckout
                    stripeKey='pk_test_51MbheEIKcIjc7rLAhwTNFfoSrKPC26NRtEfdET1smAcnJit3EeoxYFmp1kHl1W0CwTEcCzFvWUeaG0Ql29hUxMPJ00NCZnnx0M'
                    label="Pay Now"
                    name = "Pay with card"
                    billingAddress
                    shippingAddress
                    amount={homeStayData.total}
                    description ={`Your total is ${homeStayData.total}`}
                    // token={}

                
                /> */}



            </div>
        </div>
    </div>
  )
}

export default Checkout