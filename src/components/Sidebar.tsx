import React from "react";
import "../styles/Sidebar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Sidebar = () => {
  return (
    <div className=" sidebar m-5 pb-6 rounded-sm justify-center flex flex-col items-center flex-3">
      <div className="sidebar-items flex flex-col items-center text-xl text-slate-600">
        <span className="sidebar-title">ABOUT US</span>
        <img
          className=" w-[200px] h-[200px] object-cover mt-[15px]"
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <p className="p-8 text-center text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
    
        </p>

        <div className="m-[10px] leading-3 text-center">
          <span className="sidebar-title ">CATEGORIES</span>
          <ul className="mt-4 space-y-4">
            <li className="">Life</li>
            <li className="">Training</li>
            <li className="">Care</li>
          </ul>
        </div>
        <div className="m-[10px] leading-3 text-center">
          <span className="sidebar-title">FOLLOW US</span>
          <div className="mt-4 space-x-2 cursor-pointer ">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
