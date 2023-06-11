import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useGetHomeStaysInCityQuery, useGetminmaxcitiesQuery } from '../features/APISlices/homeStayAPI'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getminmax } from '../features/ReducerSlices/homeStaySlice'

const HomeStayInCity = () => {
    const {city} = useParams();
    console.log(city)
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')  // const dispatch = useDispatch()
    // console.log('min,max', min,max)

    const[asc, setAsc] = useState(false)
    const[desc, setDesc] = useState(false)
    const[dasc, setDasc] = useState(false)
    const[ddesc, setDdesc] = useState(false)

 
    const fetchcities = useGetHomeStaysInCityQuery({city,min,max,asc,desc,dasc,ddesc})
    console.log('fetchcities',fetchcities)
    const {data, isLoading} = fetchcities

    
    // console.log('min, max', min, max)
    // const getminmaxdata = useGetminmaxcitiesQuery(min,max)
    // console.log(getminmaxdata)

    const handlemin = (e)=>{
        const minimum = parseInt(e.target.value)

        setMin(minimum)

    }
    const handlemax = (e)=>{
        const maximum = parseInt(e.target.value)
        setMax(maximum)
        
    }
    //handling price in ascending
    const handleAsc =(e)=>{

        const checked = e.target.checked
        if(checked){
            // console.log('asc', asc)
            setAsc(true)
            
        }else{
            setAsc(false)
        }

    }
    console.log('orderasc',asc)

    //handling price in descending
    const handleDes = (e)=>{
        const checked = e.target.checked
        if(checked){
            // console.log('checked', checked)
            setDesc(true)
            
        }else{
            setDesc(false)
        }
    }
    //handle distance in descending
    const handleDdes = (e)=>{
        const checked = e.target.checked
        // console.log('checked',checked)

        if(checked){
            // console.log('checked', checked)
            setDdesc(true)
            
        }else{
            setDdesc(false)
        }
    }
    //handle distance in ascending
    const handleDasc = (e)=>{
        const checked = e.target.checked
        if(checked){
            // console.log('asc', asc)
            setDasc(true)
            
        }else{
            setDasc(false)
        }
    }
    // useEffect(()=>{


    // },[])
  
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('refetching')
    //     console.log('min,max',min,max)
    //     fetchcities.refetch({city,min,max});

    //     // dispatch(getminmax({"min":min , "max":max}))
        
        




    //     setMin('')
    //     setMax('')

    // }


    
  return (

    <>
    {

    
        isLoading?<>Loading . . .</>:
        <div className='  '>
        <div >
        <Navbar isHomePage={false}/>


        </div>
        <div className='ml-10'>
            <span className='rounded border p-2 mb-2'>Homestays in {city}</span>
        
            {
                data &&
                <div className='flex'>

                    {
                        data.counthotels===0?<>No Available homestays in this City</>:

                        <>
                            <div className='rounded-xl shadow-md bg-white p-8 space-y-4 sticky top-20 h-120'>
                            {/* left box */}
                            <span className='font-semibold text-2xl '>Filter Options</span>
                            <div className='flex flex-col space-x-2'>
                                <span className='text-lg'>Select your Price Range</span>
                                <input type="text" placeholder='Lower Range' value={min} onChange={handlemin} className='border border-gray-300 outline-none p-1 rounded-md px-4 mb-3' />
                                <input type="text" placeholder='Upper Range' value={max} onChange={handlemax} className='border border-gray-300 outline-none p-1 rounded-md px-4 mb-3' />
                                {/* <button className='p-2 px-6  rounded-md text-white bg-cyan-600' onClick={handleSubmit}>Search</button> */}
                            </div>
                            {/* <br /> */}
                            <hr/>
                            <span className='text-lg '>Other Options</span>
                            <div className='lex space-x-2'>
                                <input type="checkbox" onClick={handleAsc} />
                                <span>By cheapest</span>

                            </div>
                            <div className='flex space-x-2'>
                                <input type="checkbox" onClick={handleDes} />
                                <span>By Most Expensive</span>

                            </div>
                            <div className='flex space-x-2'>
                                <input type="checkbox" onClick={handleDasc}/>
                                <span>By Shortest Distance</span>

                            </div>
                            <div className='flex space-x-2'>
                                <input type="checkbox" onClick={handleDdes} />
                                <span>By Longest Distance</span>
                            </div>
                            
                            {/* <div className='flex flex-col mt-3 '>
                                <span className='text-lg font-semibold text-gray-600'>Check In</span>
                                <input className='bg-gray-100 p-2 rounded-md border-2 border-gray-500' type="date" placeholder='Check IN date'/>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-lg font-semibold text-gray-600'>Check OUT</span>
                                <input className='bg-gray-100 p-2 rounded-md border-2 border-gray-500' type="date" placeholder='Check OUT date'/>
                            </div> */}
                
                
                            {/* <div className='flex justify-center'>
                            <Link to ="/bookstay">
                            <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button">Book Now </button>
                            </Link>
                            </div> */}

            </div>
                            <div className='flex flex-col ml-auto space-y-8'>
                {/* right side boxes */}
                                {
                                   data && data.homestays.map((stay)=>(
                                        <div key={stay._id} className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
                                            <div className='flex items-center'>
                                                <img className='h-56 w-96 object-cover' src="images/khalti.png" alt="" />
                                            </div>
                                            <div className='flex flex-col w-2/3 '>
                                                <div className='flex justify-between items-start '>
                                                    <span className='text-lg font-semibold'>{stay.name}</span>
                                                    <span> <span className='text-lg font-bold
                                                    '>Rs.{stay.cheapestPrice}</span> <span className='text-gray-400 text-xs'>per Night</span></span>
                                                </div>
                                                <span className='text-xs'>{stay.distance} km from TIA (Tribhuvan International Airport).</span>
                                                <div className='flex justify-between items-end  mt-auto text-lg'>

                                                    <Link to={`/${stay._id}`} >
                                                    <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i className="fa-solid fa-eye"></i> </button>
                                                    </Link>
                                                    {/* <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button> */}

                                                </div>
                                                
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                {/* <div className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
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
                                            <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i className="fa-solid fa-eye"></i> </button>
                                            <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button>

                                        </div>
                                        
                                    </div>
                                </div> */}
                                {/* <div className='flex flex-grow  bg-white shadow-lg rounded-xl p-2 space-x-3 mr-10 '>
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
                                            <button className='bg-green-400 px-4 py-1 rounded-lg' type="button">View <i className="fa-solid fa-eye"></i> </button>
                                            <button type="button" className='bg-blue-700 px-4 py-1 rounded-lg'>Book</button>

                                        </div>
                                        
                                    </div>
                                </div> */}
                            </div>
                        </>
                    }
                
                
                </div>

            }
            
        </div>
        
    </div>
    }
    </>

    
  )
}

export default HomeStayInCity