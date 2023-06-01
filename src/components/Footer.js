import React from 'react'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
  return(
    <div className="flex flex-col items-center justify-center h-20 footer 3xl:h-36 bg-off-black">
      <div id="socialMedia" className="text-bone-white">
        <span className='hover:text-white'><InstagramIcon /></span>
        <span className='hover:text-white'><TwitterIcon /></span>
        <span className='hover:text-white'><FacebookIcon /></span>
        <span className='hover:text-white'><LinkedInIcon /></span>
      </div>
      <p className='text-bone-white'> &copy; 2023 cafeducoast.com </p>
    </div>
);
}

export default Footer;
