import React from "react";
import ImageSlider from "../components/ImageSlider";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing h-[84.5vh]  bg-cover object-cover">
      <div className="landing-container w-[500px] flex flex-col  text-white text-[40px] ">

        <ImageSlider />
        <h1 className="mt-12 ">WELCOME</h1>
        <h3>To my dog website</h3>

      </div>
    </div>
  );
};

export default Landing;
