import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [showNav, setShowNav] = useState(false);

  const [isAuth, setIsAuth] = useState(() => {
    let result = JSON.parse(localStorage.getItem("authorized"));
    return result === true ? true : false;
  });
  console.log({ isAuth });
  const initValues = { username: "darel", email: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [err, setErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
 

  const login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password &&
      details.name === adminUser.name
    ) {
      setIsAuth(true);
    } else {
      console.log("not logged in");
      setErr("Details do not match!");
    }
  };

  const Logout = () => {
    console.log("logout");
  };

  const adminUser = {
    name: "",
    email: "darelbavcar1@gmail.com",
    password: "123",
  };

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("authorized", JSON.stringify(isAuth));
    } else {
      localStorage.removeItem("authorized");
    }
  }, [isAuth]);

  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        showNav,
        setShowNav,
        initValues,
        formValues,
        setFormValues,
        err,
        setErr,
        isSubmit,
        setIsSubmit,
        

        login,
        Logout,
        adminUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
