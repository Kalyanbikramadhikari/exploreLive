import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useRegisterMutation } from '../features/APISlices/homeStayAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [registerUser, {data, isLoading,isSuccess, status}] = useRegisterMutation()
    const Navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [email, setEmail]= useState('');
    const [name, setName]= useState('');
    const [picture, setPicture]= useState('');



    const handleName = (e)=>{
        const name = e.target.value
        setName(name)
    }

    const handleEmail = (e)=>{
        const email = e.target.value
        setEmail(email)
    }

    const handlePassword = (e)=>{
        const password = e.target.value
        setPassword(password)
    }
    const handlePicture = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        // console.log('picture',picture)

        console.log('file',file)
      };

    const setFileToBase = (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setPicture(reader.result);
        }
    }
      
    // useEffect(() => {
    //     console.log('picture', picture);
    //   }, [picture]);
    
    // console.log('picture',picture)

    const submitHandler = () => {
        // const formData = new FormData();
        // formData.append('username', name);
        // formData.append('email', email);
        // formData.append('password', password);
        // formData.append('image', picture);
        // console.log('formDAta',formData)
        // registerUser(formData)
        registerUser({"username":name,email,password,"image":picture});
      }

    useEffect(()=>{
        if(isSuccess){
            toast.success('Registeration Successful. Please Login now to continue')

            Navigate('/signin')
        }
        if(status ==='rejected'){
            toast.error('Error')
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
                            <input className='p-3 rounded-md w-full outline-none' type="text" name='username' value={name} onChange={handleName} placeholder='Enter Your Name . . .' />
                    </div>
                   

                
                    <div className=''>
                            <input className='p-3 rounded-md w-full outline-none' type="email" name='email' value={email} onChange={handleEmail} placeholder='Enter Your Email . . .' />
                    </div>
                    <div>
                        <input className='p-3 rounded-md w-full outline-none' type="password" name='password' value={password} onChange={handlePassword} placeholder='Enter Your Password . . .' />
                    </div>
                    <div>
                        <input type="file" name='image' onChange={handlePicture}/>
                    </div>
                    <div className='flex ml-auto'>
                        <button className='p-2 px-6 mt-10 flex content-center rounded-md text-white bg-cyan-600' type="button" onClick={submitHandler}>Sign Up</button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>

    </div>
  )
}

export default Register;