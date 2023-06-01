import React from 'react'; 
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/beach.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-center bg-cover home xl:justify-start md:items-start 3xl:items-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="flex flex-col items-center p-3 md:items-start 3xl:items-center headerContainer rounded-xl bg-off-black md:bg-transparent bg-opacity-80 md:ml-10 xl:ml-20 xl:mt-60">
          <h1 className='flex-1 text-4xl font-semibold text-white md:text-7xl md:mb-5 xl:text-9xl xl:mb-10 3xl:font-bold 3xl:mb-32'>Cafe Du Coast</h1>
          <p className='m-2 text-2xl font-light text-white md:text-3xl xl:text-5xl 3xl:text-7xl md:mb-5 xl:mb-10 3xl:mb-32'>ORDER NOW!</p>
          <Link to="/menu">
              <button className='h-12 text-xl border-0 rounded cursor-pointer xl:rounded-xl 3xl:rounded-2xl xl:text-3xl 3xl:text-4xl xl:h-16 3xl:h-24 3xl:w-72 xl:w-56 bg-bone-white text-off-black mb-7 hover:bg-white w-44 md:mb-5'>MENU</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;
