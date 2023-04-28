
import './App.css';
import BookStay from './components/BookStay';
import Checkout from './components/Checkout';
import Home from './components/Home';
import HomeStayInCity from './components/HomeStayInCity';
import SingleHomeStay from './components/SingleHomeStay';

function App() {
  return (
    <div className="App">
      <Home/>
      <HomeStayInCity/>
      <SingleHomeStay/>
      <BookStay/>
      <Checkout/>
    </div>
  );
}

export default App;
