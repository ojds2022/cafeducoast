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
    <div className="flex flex-row h-20 navbar bg-off-black 3xl:h-36">
      {openLinks ? (
        <div>
            <Link to="/" className='fixed top-4 left-6'>
              <img className='w-12 3xl:w-20' alt='logo' src={Logo} />
            </Link>
            <button className="fixed bg-transparent border-0 cursor-pointer top-5 right-6 reorderIcon text-bone-white hover:text-white" onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
            <div className='fixed grid grid-rows-4 p-2 rounded-b-lg gap-y-2 right-3 top-20 bg-off-black'>
                <Link to="/"> <span className="text-xl cursor-pointer border-b-1 border-bone-white 3xl:text-4xl xl:text-2xl text-bone-white hover:text-white">Home</span> </Link>
                <Link to="/about"> <span className="text-xl cursor-pointer border-b-1 border-bone-white 3xl:text-4xl xl:text-2xl text-bone-white hover:text-white">About</span> </Link>
                <Link to="/contact"> <span className="text-xl cursor-pointer border-b-1 border-bone-white 3xl:text-4xl xl:text-2xl text-bone-white hover:text-white">Contact</span> </Link>
                {/*<Link to="/"> <span className="text-xl cursor-pointer border-b-1 border-bone-white 3xl:text-4xl xl:text-2xl text-bone-white hover:text-white">Portfolio</span> </Link>*/}
            </div>
      </div>
      ) : (
        <div className="flex items-center justify-between px-6 3xl:px-20 grow" id={openLinks ? "open" : "close"}>
            <Link to="/">
              <img className='w-12 3xl:w-20' alt='logo' src={Logo} />
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
