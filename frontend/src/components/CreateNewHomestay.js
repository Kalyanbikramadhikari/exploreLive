import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux';
import { useCreateNewHomestayMutation } from '../features/APISlices/homeStayAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateNewHomestay = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [distance, setDistance] = useState();
    const [description, setDescription] = useState('');
    const [cheapestPrice, setCheapestPrice] = useState();
    // console.log('name', name)
    const changeName = (e)=>{
        setName(e.target.value)

    }
    const changeCity = (e)=>{
        setCity(e.target.value)

    }
    const changeAddress = (e)=>{
        setAddress(e.target.value)

    }
    const changeDistance = (e)=>{
        setDistance(e.target.value)

    }
    const changeDescription = (e)=>{
        setDescription(e.target.value)

    }
    const changeCheapestPrice = (e)=>{
        setCheapestPrice(e.target.value)

    }

    // const dispatch = useDispatch()
    const [createNewHomestay, {data, isLoading, isSuccess, status}] = useCreateNewHomestayMutation();
    


    const submitHandler=()=>{
        console.log(' add homestay clicked')
        createNewHomestay({'name':name,'city':city,'address':address,'distance':distance,'description':description,'cheapestPrice':cheapestPrice})
        setName('')
        setCity('')
        setAddress('')
        setDistance('')
        setDescription('')
        setDistance('')
        setCheapestPrice('')

    }
    useEffect(()=>{
        if(isSuccess){
            toast.success('Homestay Created Successfully')
            navigate('/')
        }
        if(status==='rejected'){
            toast.error('Unsucessfull Creation of Homestay')
        }
    },[isSuccess, status])
    




  return (
    <div className=''>
        <div >
        <Navbar isHomePage={false}/>

        </div>
        <div className="flex justify-center mt-5 ">
            
            <div>
                <img className='h-120 w-96 object-cover' src="images/logo.jpeg" alt="" />
            </div>
            <div className="flex w-96 bg-gray-300 p-8">
                {/* <form className=' w-full space-y-4' action="" onSubmit={submitHandler}> */}
                <div className=' w-full space-y-4'>

                
                    <div className=''>
                            <input className='p-2 rounded-md w-full outline-none' type="text" value={name}   onChange={changeName} placeholder=" Homestay's Name . . ."   />
                    </div>
                    <div>
                        <input className='p-2 rounded-md w-full outline-none' type="text" value={city} onChange={changeCity} placeholder=" Homestay's City . . ."  />
                    </div>
                    <div>
                        <input className='p-2 rounded-md w-full outline-none' type="text" value={address} onChange={changeAddress} placeholder=" Homestay's Address . . ."  />
                    </div>
                    <div>
                        <input className='p-2 rounded-md w-full outline-none' type="text" value={distance} onChange={changeDistance} placeholder=" Homestay's Distance in km from TIA . . ."  />
                    </div>
                    
                    <div>
                        <input className='p-2 rounded-md w-full outline-none' type="text" value={cheapestPrice} onChange={changeCheapestPrice} placeholder=" Homestay's Price per night . . ."  />
                    </div>
                    <div>
                        <textarea className='p-2 rounded-md w-full outline-none' name="" id="" cols="30" rows="2" onChange={changeDescription} placeholder=" Homestay's Description . . ." ></textarea>
                        {/* <input className='p-2 rounded-md w-full outline-none' type="text" value={description} placeholder=" Homestay's Description . . ."  /> */}
                    </div>
                    <div className='flex ml-auto justify-center'>
                        <button className='p-2 px-6 mt-3 flex content-center rounded-md text-white bg-cyan-600' type="button" onClick={submitHandler} >Add homestay</button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>

    </div>
  )
}

export default CreateNewHomestay