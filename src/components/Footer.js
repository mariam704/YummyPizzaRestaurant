import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styless/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <FacebookIcon/>
            <FacebookIcon/>
            <TwitterIcon/>

        </div>
        <p> &copy; 2024 YummyPizza.com</p>
    </div>
  );
}

export default Footer;
