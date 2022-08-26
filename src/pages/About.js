import React from 'react';
import OfficeWorkers from '../assets/EmployeesPhoto.jpg';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${OfficeWorkers})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          At West Code Inc., we strive to be an industry leader in all aspects that
          benefit those who are connected to us.
          We promise our customers stellar service, our suppliers a valuable partner,
          our investors the prospects of sustained profitable growth, and our employees
          the allure of huge impact.
        </p>
        <Link to="/employees">
          <button>Employees</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
