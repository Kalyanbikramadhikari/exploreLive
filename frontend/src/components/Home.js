import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import HomeStayByCity from './HomeStayByCity'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        
        <div className='' style={{backgroundImage:'url(images/backimg2.jpg)', height:'450px', width:'100%', backgroundSize: 'cover'}}  >
            <Navbar/>
            <SearchBar/>
        </div>
        <div>
            <HomeStayByCity/>
        </div>
    </div>
  )
}

export default Home