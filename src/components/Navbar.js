import React, { useState } from 'react';
import Logo from '../assets/sun(white).png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="flex flex-row h-20 navbar bg-off-black">
      {openLinks ? (
        <div className="flex items-center justify-between px-6 grow">
        <Link to="/"> <span className="text-lg cursor-pointer text-bone-white hover:text-white">Home</span> </Link>
        <Link to="/about"> <span className="text-lg cursor-pointer text-bone-white hover:text-white">About</span> </Link>
        <Link to="/contact"> <span className="text-lg cursor-pointer text-bone-white hover:text-white">Contact</span> </Link>
        <button className="bg-transparent border-0 cursor-pointer reorderIcon text-bone-white hover:text-white" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      ) : (
        <div className="flex items-center justify-between px-6 grow" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img className='w-12' alt='logo' src={Logo} />
        </Link>
        <button className="bg-transparent border-0 cursor-pointer reorderIcon text-bone-white hover:text-white" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      )}
    </div>
  );
}

export default Navbar;
