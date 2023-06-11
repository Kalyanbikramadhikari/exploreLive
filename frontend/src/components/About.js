import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <div>
            <Navbar isHomePage={false}/>
        </div>
        <div>
            <div>
                <img className='h-96 w-full object-cover mb-10' src="/images/about-img.jpg" alt="" />
            </div>
            <div>
                <span className='flex justify-center text-gray-500 text-3xl font-bold mb-4'>What we're about</span>
                <span className='flex mx-72  font-medium '>We're big fans of home sharing and dedicated to offering quality rooms at wallet-friendly prices and to giving hosts an opportunity to rent our their spare rooms on our global marketplace.</span>
            </div>
            <div>
            <span className='flex justify-center text-gray-500 text-3xl font-bold mb-4'>Our Story</span>

                <span className='flex mx-72 font-medium '>Founeded in 2022, when we went through the community home stay we aimed and planned to provide travellers and tourists with a better platform providing more efficient features.So here we are to serve you with better features.</span>
            </div>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default About