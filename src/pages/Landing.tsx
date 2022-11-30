import React from "react";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing h-[84.5vh] flex justify-center items-start bg-cover object-cover">
      <div className="landing-container flex flex-col items-center text-white text-[40px]">
        <h1 className="mt-12">WELCOME</h1>
        <h3>To my dog website</h3>

      </div>
    </div>
  );
};

export default Landing;
