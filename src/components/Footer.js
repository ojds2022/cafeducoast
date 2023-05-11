import React from 'react'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';


function Footer() {
  return(
      <div className="footer h-20 bg-off-black flex justify-center items-center flex-col">
        <div className="socialMedia text-bone-white">
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
