import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/caliCoast.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>West Code Inc.</h1>
        <p>START YOUR DREAM JOB TODAY</p>
        <Link to="/departments">
          <button>DEPARTMENTS</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
