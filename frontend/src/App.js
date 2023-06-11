
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BookStay from './components/BookStay';
import Checkout from './components/Checkout';
import Home from './components/Home';
import HomeStayInCity from './components/HomeStayInCity';
import SingleHomeStay from './components/SingleHomeStay';
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from './features/ReducerSlices/authSlice';
import SearchHomeStay from './components/SearchHomeStay';
import Homestay from './components/Homestay';
import About from './components/About';
import CreateNewHomestay from './components/CreateNewHomestay';
// import HomeStayByCity from './components/HomeStayByCity';


//stripe
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripePayment from './components/StripePayment';
import Success from './components/Esewasuccess';
import Bookings from './components/Bookings';
import Allbookings from './components/Allbookings';



function App() {

  const userData = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{'user':{}, 'token':''}

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserData(userData))
  },[])


  return (

    <Router>
      <div className="App">
        
        {/* <Header/> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          
          <Route path="/" element = {<Home/>} />
          <Route path="/about-us" element = {<About/>} />
          <Route path="/homestays" element={<Homestay/>} />
          <Route path="/:id" element = {<SingleHomeStay/>} />
          <Route path='/search' element = {<SearchHomeStay/>} />
          <Route path="/signin" element = {<Login/>} />
          <Route path="/signup" element = {<Register/>} />
          <Route path="/admin/allbookings" element = {<Allbookings/>} />
          <Route path="/bookings" element = {<Bookings/>} />

          <Route path="/createhomestay" element = {<CreateNewHomestay/>} />

          <Route path="/homestaysincity/:city" element = {<HomeStayInCity/>} />
          {/* <Route path="/homestaysincity/:city?min_price=:minimum&max_price=:max" element = {<HomeStayInCity/>} /> */}


         
          <Route path="/bookstay" element = {<BookStay/>} />
          <Route path="/checkout" element = {<Checkout/>} />
          {/* esewa success and fail route */}
          <Route path ="/success" element ={<Success/>} />
          {/* <Route path="checkout/stripepayment" element = {<StripePayment/>} /> */}


          {/* route for stripe payment */}
          <Route
            path="/checkout/stripepayment"
            element={
              <Elements stripe={loadStripe('pk_test_51MbheEIKcIjc7rLAhwTNFfoSrKPC26NRtEfdET1smAcnJit3EeoxYFmp1kHl1W0CwTEcCzFvWUeaG0Ql29hUxMPJ00NCZnnx0M')}>
                <StripePayment />
              </Elements>
            }
          />
        </Routes>

        
      </div>

    </Router>





  //   <div className="App">
  //     <Home/>
  //     <HomeStayInCity/>
  //     <SingleHomeStay/>
  //     <BookStay/>
  //     <Checkout/>
  //   </div>
  );
}

export default App;
