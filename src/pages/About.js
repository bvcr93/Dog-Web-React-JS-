import React from "react";
import "../styles/About.css";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import {withRouter} from "react-router-dom"

const About = () => {
  return (
    <div className="about-header">
      <div className="header-titles">
        <span className="sm">Adopt</span>
        <span className="lg">Me</span>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="home">
        <Posts />
        <Sidebar />
        
      </div>
    </div>
  );
};

export default About;
