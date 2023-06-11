import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useLoginMutation } from '../features/APISlices/homeStayAPI';
import {  toast } from 'react-toastify';
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getUserData } from '../features/ReducerSlices/authSlice';


const Login = () => {
    // console.log('first')
    const navigate = useNavigate();

    const [login, {data, isLoading , isSuccess,status} ] = useLoginMutation()
    console.log('login data',data)
    // console.log('login, loginData', login, data,isLoading,isSuccess,status)
     
    const dispatch = useDispatch()
    const [password, setPassword] = useState('');
    const [email, setEmail]= useState('');

    
    const handleEmail = (e)=>{
        const email = e.target.value
        setEmail(email)
    }

    const handlePassword = (e)=>{
        const password = e.target.value
        // console.log(password)
        setPassword(password)
    }

    const submitHandler = ()=>{
        console.log('email, password', email, password)

        login({"email":email, "password":password}) 
    }

    useEffect(()=>{
        if(isSuccess ){
            toast.success('Login successful')
            dispatch(getUserData(data))
            // dispatch(getUserData({'name':loginData.user.name, 'token':loginData.token }))

            navigate('/')

        }
        if(status === 'rejected'){
            toast.error('Incorrect email or password')
        }
    },[isSuccess , status])

    
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
                            <input className='p-3 rounded-md w-full outline-none' type="email" value={email} onChange={handleEmail} placeholder='Enter Your Email . . .' />
                    </div>
                    <div>
                        <input className='p-3 rounded-md w-full outline-none' type="password" value={password} onChange={handlePassword} placeholder='Enter Your Password . . .' />
                    </div>
                    <div className='flex ml-auto'>
                        <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button" onClick={submitHandler}>Log In</button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>

    </div>
    )
  
}

export default Login 