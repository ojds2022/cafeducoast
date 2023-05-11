import React, { useState } from 'react';
import Logo from '../assets/sun(white).png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar bg-off-black h-20 flex flex-row">
      {openLinks ? (
        <div className="flex items-center justify-between px-6 grow">
        <Link to="/"> <span className="text-bone-white hover:text-white cursor-pointer text-lg">Home</span> </Link>
        <Link to="/about"> <span className="text-bone-white hover:text-white cursor-pointer text-lg">About</span> </Link>
        <Link to="/contact"> <span className="text-bone-white hover:text-white cursor-pointer text-lg">Contact</span> </Link>
        <button className="reorderIcon bg-transparent border-0 text-bone-white hover:text-white cursor-pointer" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      ) : (
        <div className="flex items-center justify-between px-6 grow" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img className='w-12' alt='logo' src={Logo} />
        </Link>
        <button className="reorderIcon bg-transparent border-0 text-bone-white hover:text-white cursor-pointer" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      )}
    </div>
  );
}

export default Navbar;
