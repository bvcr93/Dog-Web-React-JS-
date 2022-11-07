import React, { useContext, useState, useEffect } from "react";
import "../styles/Login.css";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";

const Login = ({ setShowNav, setShowFooter }) => {
  // const { setIsAuth, isAuth } = useContext(UserContext);

  const initValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErr(validate(formValues));
  //   setIsSubmit(true);
  //   // localStorage.setItem("user")
  // };

  useEffect(() => {
    console.log(err);
    if (Object.keys(err).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [err]);

  const validate = (values) => {
    const err = {};
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

  const { user, setUser, adminUser, Login, Logout, setIsAuth, isAuth } =
    useContext(UserContext);

  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setIsAuth(true);
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("not logged in");
    }
  };

  return (
    // <div className="login-container">
    //   {Object.keys(err).length === 0 && isSubmit
    //     ? setIsAuth(true)
    //     : null}

    //   <form onSubmit={handleSubmit} className="sign-in">
    //     <input
    //       onChange={handleChange}
    //       type="text"
    //       placeholder="First Name..."
    //       name="username"
    //       defaultValue={formValues.username}
    //     />
    //     <p className="text-red-600">{err.username}</p>
    //     <input
    //       onChange={handleChange}
    //       type="email"
    //       placeholder="Email..."
    //       name="email"
    //       defaultValue={formValues.email}
    //     />
    //     <p className="text-red-600">{err.email}</p>
    //     <input
    //       onChange={handleChange}
    //       type="password"
    //       placeholder="Password..."
    //       name="password"
    //       defaultValue={formValues.password}
    //     />
    //     <p className="text-red-600">{err.password}</p>
    //     <button
    //       className="sign-in-btn"
    //       // onClick={() => setIsAuth(true)}
    //     >
    //       {isAuth && <Navigate to="/" />}
    //       {isAuth ? setShowNav(true) : setShowNav(false)}
    //       {isAuth ? setShowFooter(true) : setShowFooter(false)}
    //       Sign in
    //     </button>
    //   </form>
    // </div>

    // ANOTHER LOGIN FORM

    <form

      onSubmit={submitHandler}
      className="flex flex-col m-auto w-[50%] items-center justify-center"
    >
      <label htmlFor="name">Name:</label>
      <input
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
        value={details.name}
        type="text"
        className="bg-slate-400"
      />
      <label htmlFor="name">Email:</label>
      <input
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
        value={details.email}
        type="text"
        className="bg-slate-400"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
        type="password"
        className="bg-slate-400"
      />
      <input type="submit" className="bg-slate-500 mt-5" />
      {isAuth && <Navigate to="/" />}
      {isAuth ? setShowNav(true) : setShowNav(false)}
      {isAuth ? setShowFooter(true) : setShowFooter(false)}
    </form>
  );
};

export default Login;
