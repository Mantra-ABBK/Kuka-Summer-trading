import React from 'react'

import menu1 from "../assest/menu1.jpg";
import "../Styles/Home.css";
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
        
        <div className="home" style={{ backgroundImage: `url(${menu1})` }}>
        <div className="headerContainer">
          <h1> Kuka's PLACE </h1>
          <p> HOME OF GOOD FOOD</p>
          
        </div>
      </div>
     <Footer/>
      </div>
    );
}

export default Home;
