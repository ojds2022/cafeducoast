import React from 'react'; 
import { Link } from 'react-router-dom';
import BannerImage from '../assets/beach.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home w-full h-72.5vh bg-center bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer rounded-xl p-3 flex items-center flex-col bg-off-black bg-opacity-80">
        <h1 className='text-4xl text-white font-semibold flex-1'>Cafe Du Coast</h1>
        <p className='text-2xl font-light text-white m-2'>ORDER NOW!</p>
        <Link to="/menu">
          <button className='bg-bone-white text-off-black mb-7 hover:bg-white cursor-pointer border-0 rounded h-12 w-44 text-xl'>MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
