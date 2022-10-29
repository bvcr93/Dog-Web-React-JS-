import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../styles/Dog.css";


const Dog = ({ img, breed, origin }) => {
  return (
    <div className="dog-container">
      
      <div className="dog-cart">
        <img className="dog-img" src={img} />
        <h3> {breed}</h3>
        <p> {origin}</p>
        <Link to = "/details">
        <button className="adopt-btn">READ MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default Dog;
