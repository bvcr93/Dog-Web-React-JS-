import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";


const Nav = () => {
  const [expandNav, setExpandNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNav(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNav ? "open" : "close"}>
      <div className="left-nav">
        
        <FacebookIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
      <div className="center-nav links">
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="right-nav">
        <button className="person-icon">
          <PersonIcon />
        </button>
        <Link to="/checkout"></Link>

        <button
          className="reorder-icon"
          onClick={() => setExpandNav((prev) => !prev)}
        >
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Nav;
