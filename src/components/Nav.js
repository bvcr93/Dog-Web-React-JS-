import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import "../styles/Nav.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";
import LoginIcon from "@mui/icons-material/Login";
import { UserContext } from "./UserContext";
const Nav = () => {
  const { setIsAuth } = useContext(UserContext);
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
        <Link to="/login">
          <button className="login-btn" onClick={() => setIsAuth(false)}>
            {/* <Navigate to = "/login"/> */}
            <LoginIcon />
          </button>
        </Link>
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
