import React, { useContext, useState, useEffect } from "react";
import "../styles/Login.css";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = ({ setShowNav, setShowFooter }) => {
  const { setIsAuth, isAuth } = useContext(UserContext);

  const initValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(err);
    if (Object.keys(err).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [err]);

  const validate = (values) => {
    const err = {}
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      err.username = "Username is required";
    }
    if (!values.email) {
      err.email = "Email is required";
    } else if (!regex.test(values.email)) {
      err.email = "This is not valid email!";
    }
    if (!values.password) {
      err.password = "Password is required";
    } else if (values.password.length < 4) {
      err.password = "Password must contain more than 4 characters";
    } else if (values.password.length > 10) {
      err.password = "Password cannot exceed 10 characters";
    }
    return err;
  };

  return (
    <div className="login-container">
      {Object.keys(err).length === 0 && isSubmit
        ? setTimeout(() => {
            setIsAuth(true);
          }, 2000)
        : null}
      
      <form onSubmit={handleSubmit} className="sign-in">
        <input
          onChange={handleChange}
          type="text"
          placeholder="First Name..."
          name="username"
          defaultValue={formValues.username}
        />
        <p className="text-red-600">{err.username}</p>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email..."
          name="email"
          defaultValue={formValues.email}
        />
        <p className="text-red-600">{err.email}</p>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password..."
          name="password"
          defaultValue={formValues.password}
        />
        <p className="text-red-600">{err.password}</p>
        <button
          className="sign-in-btn"
          // onClick={() => setIsAuth(true)}
        >
          {isAuth && <Navigate to="/" />}
          {isAuth ? setShowNav(true) : setShowNav(false)}
          {isAuth ? setShowFooter(true) : setShowFooter(false)}
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
