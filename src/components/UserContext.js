import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(() => {
    let result = JSON.parse(localStorage.getItem("authorized"));
    return result === true ? true : false;
  });

  const [err, setErr] = useState("");

  
  const login = () => {
    setIsAuth(true)
  }

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
        err,
        setErr,
     
        Logout,
        adminUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
