import React from 'react';
//we put curly bracees for pizaadata because of we import a variable
import { PizaaData } from '../data/PizaaData';
import MenuItem from '../components/MenuItem';
import "../styless/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {PizaaData.map((menuItem,key)=>{
            return(
        <MenuItem key={key}
        image={menuItem.image}
        name={menuItem.name}
        price={menuItem.price}
        />
            )
        })}
      </div>
    </div>
  );
}

export default Menu;
