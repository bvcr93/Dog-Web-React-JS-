import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";
import LoginIcon from "@mui/icons-material/Login";
import { UserContext } from "./UserContext";
import { auth } from "../config/firebase";

const Nav = () => {
  const { setIsAuth, adminUser } = useContext(UserContext);

  const [nav, setNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setNav(false);
  }, [location]);
  useEffect(() => {
    console.log("a");
  }, []);

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className=" flex justify-center h-[80px] items-center  bg-indigo-100 shadow-lg shadow-indigo-300/40">
        <div className="flex flex-1 ml-6  ">
          <Link to="/">
            <button className="text-3xl text-slate-700">Adopt Me</button>
          </Link>
        </div>
        <div className="flex-4 hidden md:flex justify-center text-2xl text-slate-600">
          <Link
            className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md"
            to="/contact"
          >
            CONTACT
          </Link>
          <Link
            className="p-5  hover: bg-transparent hover:text-indigo-400 rounded-md"
            to="/shop"
          >
            SHOP
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end mr-5">
          <button className="person-icon hidden md:flex items-center ">
            <p className="text-blue-500">{auth.currentUser?.displayName}</p>
            {adminUser.name}
            <PersonIcon
              style={{
                fontSize: "35px",
                marginRight: "10px",
                color: "#555555",
              }}
            />
          </button>

          <button className="login-btn " onClick={handleLogout}>
            <LoginIcon
              style={{
                fontSize: "35px",
                marginRight: "10px",
                color: "#555555",
              }}
            />
          </button>

          <button
            className="reorder-icon md:hidden flex"
            onClick={() => setNav((prev) => !prev)}
          >
            <ReorderIcon style={{ fontSize: "35px", color: "#555555" }} />
          </button>
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-indigo-100 w-full px-6 py-4 text-center"
        }
      >
        <Link to="/about">
          <li className="border-b-2 border-blue-300 w-full py-3 hover: bg-transparent hover:text-indigo-400 rounded-md">
            ABOUT
          </li>
        </Link>
        <Link to="/contact">
          <li className="border-b-2 border-blue-300 w-full py-3 hover: bg-transparent hover:text-indigo-400 rounded-md">
            CONTACT
          </li>
        </Link>

        <Link to="/shop">
          <li className="border-b-2 border-blue-300 w-full py-3 hover: bg-transparent hover:text-indigo-400 rounded-md">
            SHOP
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
