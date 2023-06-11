import React, { useEffect } from 'react'

// import {useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js'
import {
    CardElement,
    
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
  } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { useCreateBookingMutation, useStripePaymentMutation } from '../features/APISlices/homeStayAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const StripePayment = () => {

  const stripe = useStripe();
  const elements = useElements();
  const {user} = useSelector((state)=>state.auth)
  const {total,additionalUserDetail,name,guests,Id} = useSelector((state)=>state.homestay)
  const[stripePayment, {data:paymentData , isSuccess:isPaymentSuccess}] = useStripePaymentMutation()
  console.log(paymentData)
  const[createBooking, {data:bookingData, isLoading:isBookingLoading}] = useCreateBookingMutation()



  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const {username, email, _id, } = user

  useEffect(()=>{
    if(isPaymentSuccess){
        paymentfunc()
    
    }
  },[isPaymentSuccess])


  const paymentfunc = async()=>{
    const clientSecret =paymentData && paymentData.client_secret;
    console.log('data',paymentData)
    if(!stripe || !elements){
        return;
    }

    if(clientSecret){
        const result = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardNumberElement),
                billing_details:{
                    name: user.username,
                    email: user.email,
    
                }
            }
    
        });
        if(result.error){
            toast.error(result.error.message);
            // document.querySelector('#pay_btn').disabled = false;
    
        }else{
            if(result.paymentIntent.status ==='succeeded'){
                //
                paymentInfo = {
                    id: result.paymentIntent.id,
                    status: result.paymentIntent.status
    
                }
                toast.success('Payment Sucessful')
    
                navigate('/')
                dispatch(createBooking({userdetail,"user":_id, bookingDetail,paymentInfo}))
                
    
            }else{
                toast.error('there is some error while processing payment')
            }
        }
    }
  }
  const userdetail = {
    username,
    email,    
    "address": additionalUserDetail.Address,
    "phoneNo": additionalUserDetail.PhoneNumber,   
    "country": additionalUserDetail.Country,
    "specialRequest": additionalUserDetail.specialRequest

  }
  const bookingDetail  = {
    "homeStayName": name,
    "noOfGuests": guests,
    "price": total,
    "homeStayId": Id,

  }
  let paymentInfo;

  const handlePayment =async(e)=>{

    // document.querySelector('#pay_btn').disabled = true;
    //here we will pass the toal amount to be paid
    stripePayment({'amount':total})

    
    
    



}
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });
// };

  return (
    <div>
        <div>
        <Navbar isHomePage={false}/>
        </div>
        <div className='flex justify-center mt-10  px-5 '>
            <div className=' p-10  bg-white rounded-lg p-4 gap-2 shadow-md '>
            <span className=' flex font-semibold text-2xl mb-5  text-gray-600'>Stripe Payment Info</span>
                {/* <h1 className='text-2xl font-semibold mb-5'>Stripe Payment Info</h1> */}
                <div className=' space-y-2 mb-3'>
                    <span className='text-'>Card Number</span>
                    <CardNumberElement 
                    className='border border-black p-2 rounded-md'
                        
                    />
                </div>
                <div className='space-y-2 mb-3'>
                    <span>Card Expiry</span>
                    <CardExpiryElement 
                     className='border border-black p-2 rounded-md'

                        
                    />
                </div>
                <div className='space-y-2 mb-3'>
                    <span>Card Cvc</span>
                    <CardCvcElement 
                    className='border border-black p-2 rounded-md'

                        
                    />
                </div>
                <div className='flex justify-center'>
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600'  onClick={handlePayment}>Pay Now {`-${total}`}</button>

                 {/* <button id='pay_btn' type="button" className='bg-blue-300 p-2 rounded-md flex justify-center' onClick={handlePayment}>Pay Now {`-${total}`}</button> */}

                </div>

            </div>
            
        </div>
    

        
    </div>
  )
}

export default StripePayment