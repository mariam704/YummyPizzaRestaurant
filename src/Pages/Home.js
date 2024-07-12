import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styless/Home.css';
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
  <div className="headerContainer" >
    <h1>  Yummy Pizza Dreams</h1>
    <p>PIZZA TO FITT ANY TASTE</p>
    {/* your dreams will turned into a pizza  
    pizaa tasted by your dreams */}
    <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
    </div>
    </div>
   
  );
}

export default Home;
