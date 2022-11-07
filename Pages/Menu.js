import React from "react";
import { MenuList } from "../components/Menulist";
import MenuItem from "../components/Menuitem";
import "../Styles/menu.css";
import Footer from "../components/Footer"

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Menu List </h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      <Footer/>
      
    </div>
  );
}

export default Menu;
