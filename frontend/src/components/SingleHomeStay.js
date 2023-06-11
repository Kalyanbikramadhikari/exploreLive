import React, { useState } from 'react'
import Navbar from './Navbar'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleHomestayQuery } from '../features/APISlices/homeStayAPI';
import { useDispatch } from 'react-redux';
import { bookAStay } from '../features/ReducerSlices/homeStaySlice';

const SingleHomeStay = () => {

    const {id} = useParams()
    console.log('id', id)
    const dispatch = useDispatch();

    const {data, isLoading, error} = useGetSingleHomestayQuery(id)
    console.log('data',data)
    const homestay = data && data.hotel.name
    const homestayId = data && data.hotel._id




    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const handleCheckIn = (e)=>{
        
        const checkInDate = e.target.value
        setCheckIn(checkInDate)
    }
    const handleCheckOut = (e)=>{
        const checkOutDate = e.target.value
        setCheckOut(checkOutDate)
    }
    console.log('checkIn, checkOut', checkIn, checkOut,)

    const [guest,setguest] = useState(1)
    const [days, setDays] = useState(1)
    const guestHandler =()=>{
        setguest(guest + 1)
        console.log('guest', guest)
    }
    const decrementHandler = ()=>{
        if (guest>1) {
            setguest(guest - 1)
            
        }
    }

    // const daysIncrementHandler =()=>{
    //     setDays(days+1)
    // }
    // const daysDecrementHandler = ()=>{
    //     if (days>1) {
    //         setDays(days - 1)
            
    //     }
    // }

    const handleBookHomestay= ()=>{

        dispatch(bookAStay({checkIn,checkOut,guest,days,homestay,homestayId}))

        
    }


  return (
    <div className=''>
        <div >
        <Navbar isHomePage={false}/>

        </div>
        <div className='flex m-10'>
            <div className='rounded-xl shadow-md bg-white p-8 space-y-4 sticky top-20 h-100'>
                {/* left box */}
                <span className='font-semibold text-2xl '>Book a Stay</span>
                <div className='flex flex-col mt-3 '>
                    <span className='text-lg font-semibold text-gray-600'>Check In</span>
                    <input className='bg-gray-100 p-2 rounded-md border-2 border-gray-500' type="date" placeholder='Check IN date' onChange={handleCheckIn}/>
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg font-semibold text-gray-600'>Check OUT</span>
                    <input className='bg-gray-100 p-2 rounded-md border-2 border-gray-500' type="date" placeholder='Check OUT date' onChange={handleCheckOut}/>
                </div>
                <div className='flex space-x-10'>
                    <div className='flex space-x-3 items-center'>
                        <span className='text-lg font-semibold text-gray-600'>Guests:</span>

                        <div className='bg-gray-100 flex p-1 space-x-3'>
                            <span className='text-xl'>{guest}</span>
                            <div className='flex flex-col'>
                                <button onClick={guestHandler}> <i class="fa-solid fa-chevron-up"></i></button>
                               <button onClick={decrementHandler}> <i class="fa-solid fa-chevron-down"></i></button>
                               
                            </div>

                        </div>
                    </div>
                    {/* <div className='flex space-x-3 items-center'>
                        <span className='text-lg font-semibold text-gray-600'>Days:</span>
                        <div className='bg-gray-100 flex space-x-3 p-1 '>
                            <span className='text-xl '>{days}</span>
                            <div className='flex flex-col'>
                                <button onClick={daysIncrementHandler}><i class="fa-solid fa-chevron-up"></i></button>
                                <button onClick={daysDecrementHandler}><i class="fa-solid fa-chevron-down"></i></button>

                                
                                
                            </div>


                        </div>
                    </div> */}
                </div>
                
                <div className='flex justify-center'>
                 <Link to ="/bookstay">
                 <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button" onClick={handleBookHomestay}>Book Now </button>
                 </Link>
                </div>

            </div>
   
            <div className='ml-10 flex flex-col flex-grow '>
                {/* right box */}
                <div className="flex space-x-4">
                    <div className="flex">
                    <img className='h-96 w-full object-cover' src="images/img2.jpg" alt="" />

                    </div>
                    <div className="flex flex-col space-y-2">
                        <img className='h-48 w-100 object-cover' src="images/img3.jpg" alt="" />
                        <img className='h-48 w-100 object-cover' src="images/stay1.jpg" alt="" />
                    </div>
                    
                </div>

                {
                    data &&
                
                <>
                <div>
                    <span className='font-semibold text-2xl '>Himalayan view homestay</span>
                    <div className='mt-3'>
                        <p> Himalayan view homestayis the flagship of the Community Homestay program, a successful model of women-run home stay that has been followed by other communities around Nepal. The women who run the homestays in Kathmandu are a close-knit community, proud of their accomplishments, and have learned important business skills through their work with the program.
                            Around 17 host family in Kathmandu are part of the Community Homestay, and while each home is different, they all provide a good standard of homely accommodation. Guests have their own bedrooms with comfortable beds and fresh linen. All have private bathrooms with hot water available, most have Western-style toilets and Wi-Fi. While some host family have pets, you can request a pet-free home </p>
                    </div>
                </div>
                

                <div className=' flex flex-col flex-grow mt-3 '>
                    <span className='font-semibold text-2xl mb-3'>Loging Facilites</span>

                    <div className='bg-white   flex  p-2 grid grid-cols-2 justify-between space-y-5 shadow'>
                        <div className='flex   space-x-2 mt-3  p-2'>
                            <i class="fa-solid fa-eye"></i>
                            <span className='flex'>View</span>

                        </div>
                        <div className='flex space-x-2  p-2'>
                            <i class="fa-solid fa-restroom"></i>
                            <span className='flex '>Bathroom</span>

                        </div>
                        <div className='flex   space-x-2   p-2'>
                                
                        <i class="fa-solid fa-toilet-paper"></i>
                            <span className='flex'>Toilet Paper</span>

                        </div>
                        <div className='flex space-x-2  p-2'>
                            <DryCleaningIcon/>
                            <span className='flex '>Towel</span>

                        </div>
                        <div className='flex   space-x-2   p-2'>
                                
                        <i class="fa-solid fa-wifi"></i>
                        <span className='flex'>Wifi</span>

                        </div>
                        <div className='flex space-x-2  p-2'>
                        <i class="fa-solid fa-briefcase-medical"></i>
                            <span className='flex '>First Aid</span>

                        </div>
                        <div className='flex   space-x-2   p-2'>
                                
                        <i class="fa-solid fa-toilet"></i>
                        <span className='flex'>Western Toilet</span>

                        </div>
                        <div className='flex space-x-2  p-2'>
                        <IronIcon/>
                            <span className='flex '>Iron on request</span>

                        </div>
                        <div className='flex   space-x-2   p-2'>
                                
                        <BedroomBabyIcon/>
                        <span className='flex'>Baby bed</span>

                        </div>
                        <div className='flex space-x-2  p-2'>
                        <BedroomParentIcon/>
                            <span className='flex '>Fine Bedroom</span>

                        </div>
                
                        

                    </div>
                </div>
                </>

                }
                <div className="flex  flex-col  mt-3">
                    
                    <span className='font-semibold text-2xl mb-2 '>Around Durbar Marg Homestay</span>
                    <div className="flex  bg-white shadow justify-around grid grid-cols-3 p-5 gap-y-7 gap-x-3  ">
                        <div className="">
                            <img className='h-48 w-full object-cover' src="images/stay2.jpg" alt="" />
                            <span>Hiking</span>
                        </div>
                        <div className="">
                            <img className='h-48 w-full  object-cover'  src="images/stay2.jpg" alt="" />
                            <span>Hiking</span>
                        </div>
                        <div className="">
                            <img className='h-48 w-full  object-cover'  src="images/stay2.jpg" alt="" />
                            <span>Hiking</span>
                        </div>
                        <div className="">
                            <img className='h-48 w-full  object-cover'  src="images/stay2.jpg" alt="" />
                            <span>Hiking</span>
                        </div>


                    </div>


                </div>
                
                

            </div>
            
            
        </div>
        
    </div>
  )
}

export default SingleHomeStay