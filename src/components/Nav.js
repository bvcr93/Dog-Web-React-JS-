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
    <div
      className="flex justify-center items-center h-24 sticky top-0 z-0 bg-indigo-100 shadow-lg shadow-indigo-300/40" // CSS classname: navbar
      id={expandNav ? "open" : "close"}
    >
      <div className="flex flex-1 ml-6  "> 
        <FacebookIcon style={{fontSize: "35px" , marginRight: "10px" , color: "#555555" }} />
        <LinkedInIcon style={{fontSize: "35px", marginRight: "10px", color: "#555555"}}/>
        <TwitterIcon style={{fontSize: "35px", marginRight: "10px" ,color: "#555555"}}/>
      </div>
      <div className="flex-4 hidden md:flex justify-center text-2xl text-slate-600">
        <Link className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md" to="/about">ABOUT</Link>
        <Link className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md" to="/contact">CONTACT</Link>
        <Link className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md" to="/shop">SHOP</Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button className="person-icon">
          <PersonIcon style={{fontSize: "35px" , marginRight: "10px" , color: "#555555" }} />
        </button>
        <Link to="/login">
          <button className="login-btn" onClick={() => setIsAuth(false)}>
            {/* <Navigate to = "/login"/> */}
            <LoginIcon style={{fontSize: "35px" , marginRight: "10px" , color: "#555555" }}  />
          </button>
        </Link>
        <Link to="/checkout"></Link>

        <button
          className="reorder-icon md:hidden"
          onClick={() => setExpandNav((prev) => !prev)}
        >
          <ReorderIcon style={{fontSize: "35px" , marginRight: "10px" , color: "#555555" }} />
        </button> 
      </div>
    </div>
  );
};

export default Nav;
