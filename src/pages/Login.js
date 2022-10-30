import React, { useContext } from "react";
import "../styles/Login.css";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
const Login = ({setShowNav, setShowFooter}) => {
  const { setIsAuth, isAuth } = useContext(UserContext);

  return (
    <div className="login-container">
      <div className="sign-in">
        <input type="text" placeholder="First Name..." />
        <input type="text" placeholder="Last Name..." />
        <input type="email" placeholder="Email..." />
        <button className="sign-in-btn" onClick={() => setIsAuth(true)}>
          {isAuth && <Navigate to="/" />}
          {isAuth ? setShowNav(true) : setShowNav(false)}
          {isAuth ? setShowFooter(true) : setShowFooter(false)}
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
