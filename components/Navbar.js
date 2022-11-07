import React  from 'react'
import Logo from "../assest/pizzaLogo.png";
import { Link, Outlet } from "react-router-dom";
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import '../Styles/Navbar.css'
import { useState } from "react";

function Navbar()  {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    
    return (
       <div>
         <nav className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="logo"/>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            
            <Link to="/About"> About </Link>
            <Link to="/Menu"> Menu </Link>
            <Link to="/Order"> Order </Link>
          </div>
        </div>
        <div className="rightSide">
        <Link to="/"> Home </Link>
          
            <Link to="/About"> About Us</Link>
            <Link to="/Menu"> Menu </Link>
            <Link to="/Order"> Order </Link>
          <button onClick={toggleNavbar}>
            <ReorderRoundedIcon />
          </button>
        </div>
      </nav>
      <Outlet/>
      </div>
      
    );
}

export default Navbar;
