import React from 'react'; 
import { Link } from 'react-router-dom';
import BannerImage from '../assets/beach.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home w-full h-72.5vh bg-center bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="flex flex-col items-center p-3 headerContainer rounded-xl bg-off-black bg-opacity-80">
        <h1 className='flex-1 text-4xl font-semibold text-white'>Cafe Du Coast</h1>
        <p className='m-2 text-2xl font-light text-white'>ORDER NOW!</p>
        <Link to="/menu">
          <button className='h-12 text-xl border-0 rounded cursor-pointer bg-bone-white text-off-black mb-7 hover:bg-white w-44'>MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
