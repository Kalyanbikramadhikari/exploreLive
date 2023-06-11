import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
// import FeaturedCity from './HomeStayByCity'
import { Link } from 'react-router-dom'
import { useGetAllHomeStaysQuery } from '../features/APISlices/homeStayAPI'
import FeaturedCity from './FeaturedCity'
import Religioniously from './Religioniously'
import Footer from './Footer'

const Home = () => {
  const {data, isLoading, error} = useGetAllHomeStaysQuery()
  console.log('data, isLoading, error', data, isLoading, error)

  return (
    <div>
      {
        isLoading?<>
        Loading . . .
        </>:
        <>
          <div className='' style={{backgroundImage:'url(images/backimg2.jpg)', height:'450px', width:'100%', backgroundSize: 'cover'}}  >
            <Navbar/>
            <SearchBar/>
          </div>
          <div>
              <FeaturedCity/>
          </div>
          <div>
            <Religioniously/>
          </div>
          <div>
            <Footer/>
          </div>
        </>
        
      }
        
        
    </div>
  )
}

export default Home