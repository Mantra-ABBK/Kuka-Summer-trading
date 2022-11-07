import React from "react";

import "../Styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <InstagramIcon/> <FacebookIcon/>
      </div>
      <p>Make an Order Now to Enjoy The best Pizza In Cyprus</p>
      <p> 2022 Kuka.com</p>
    </div>
  );
}

export default Footer;