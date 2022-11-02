import React, { useContext } from "react";
import "../styles/Login.css";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Login = ({ setShowNav, setShowFooter }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setIsAuth, isAuth } = useContext(UserContext);
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(submitForm)} className="sign-in">
        <input
          {...register("firstName", { required: true, maxLength: 20 })}
          type="text"
          placeholder="First Name..."
          name="firstName"
        />
        <p className="text-red-500"> {errors.firstName?.message}</p>

        <input
          {...register("lastName", { required: true, maxLength: 20 })}
          type="text"
          placeholder="Last Name..."
          name="lastName"
        />
<p className="text-red-500"> {errors.lastName?.message}</p>
        <input 
         {...register("mail", { required: "Email Address is required" })} 
         aria-invalid={errors.mail ? "true" : "false"}
        type="text" placeholder="Email..."  name="email" />
        <p className="text-red-500"> {errors.email?.message}</p>
        
        <input type="text" placeholder="Password..." required name="password" />

        <input
          type="text"
          placeholder="Confirm Password..."
          name="confirmPassword"
        />

        <input type="submit" onSubmit={() => setIsAuth(true)} />
        <button
          type="submit"
          className="sign-in-btn"
          onClick={() => setIsAuth(true)}
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
