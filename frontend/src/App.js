
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import BookStay from './components/BookStay';
import Checkout from './components/Checkout';
import Home from './components/Home';
import HomeStayInCity from './components/HomeStayInCity';
import SingleHomeStay from './components/SingleHomeStay';
import HomeStayByCity from './components/HomeStayByCity';



function App() {
  return (

    <Router>
      <div className="App">
        
        {/* <Header/> */}
        
        <Routes>
          
          <Route path="/" element = {<Home/>} />
          <Route path="/bycity" element = {<HomeStayByCity/>} />

          <Route path="/singlehomestay" element = {<SingleHomeStay/>} />
          <Route path="/bookstay" element = {<BookStay/>} />
          <Route path="/checkout" element = {<Checkout/>} />

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
