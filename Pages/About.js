import React from 'react'
import "../Styles/about.css";
import MultiplePizzas from "../assest/about1.jpg";


function About() {
    return (
        <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        We are a second-generation family business established in 1972. 
        Galaxy Pizza Abuja is one of its Kind Italian and American Pizzeria in Cyprus.
        All Pizzas are prepared with a Wood Clay Oven and Fresh Ingredients.
        Since Opening in 2003, 
        Kuka's Pizza became Leader in its Market for a great getaway Visit Kuka's Pizza 
        and discover a magnificent array of ingredients, be it from famous pizza, 
        The atmosphere is fun and lively, and you maybe assured of a warm welcome. 
        All our pizza are HALAL using rich and high quality ingreidents on a daily basis 
        and are combined into wonderful dishes by our chef under strict supervision.
         <br/>
         Thank You!

        </p>
      </div>
    </div>
    )
}

export default About;
