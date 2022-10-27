import React, { useState } from "react";
import "../styles/Dog.css";

const Dog = ({ img, breed, origin }) => {
  return (
    <div className="dog-container">
      <div className="dog-cart">
        <img className="dog-img" src={img} />
        <h3> {breed}</h3>
        <p> {origin}</p>
        <button className="adopt-btn">ADOPT ME</button>
      </div>
    </div>
  );
};

export default Dog;
