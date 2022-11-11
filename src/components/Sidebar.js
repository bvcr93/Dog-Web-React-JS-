import React from "react";
import "../styles/Sidebar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <span className="sidebar-title">ABOUT US</span>
        <img
          className="sidebar-img"
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          adipisci vel. Illum repellendus voluptas facere aliquam optio debitis
          praesentium architecto, aut, reiciendis dignissimos amet eius ipsum
          perspiciatis qui velit. Saepe!
        </p>

        <div className="sidebar-item">
          <span className="sidebar-title">CATEGORIES</span>
          <ul className="sidebar-list">
            <li className="sidebar-listItem">Life</li>
            <li className="sidebar-listItem">Training</li>
            <li className="sidebar-listItem">Care</li>
          </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">FOLLOW US</span>
          <div className="sidebar-social">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
