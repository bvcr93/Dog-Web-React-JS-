import React from "react";

import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <div className="about-header bg-repeat bg-cover bg-[url('https://www.creativefabrica.com/wp-content/uploads/2020/07/15/Watercolor-Background-Texture-Pink-Graphics-4632195-2-580x386.jpg')]">
      <div className="header-titles flex flex-col items-center text-gray-500 font-sans">
        <span className="absolute top-[10%] z-0 mt-4">Adopt</span>
        <span className=" absolute top-[17%] text-8xl mt-4 z-0">Me</span>
        <img
          className="about-img w-full h-[450px] mt-[80px] object-cover"
          src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className=" flex">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default About;
