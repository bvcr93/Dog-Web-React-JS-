import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    localStorage.setItem("authorized", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </UserContext.Provider>
  );
}
