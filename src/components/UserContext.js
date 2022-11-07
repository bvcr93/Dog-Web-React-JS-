import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [showNav, setShowNav] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

 

  const initValues = { username: "darel", email: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [err, setErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  // const [user, setUser] = useState({name: "", email: ""})


const Login = (details) => {
  console.log(details)
}

const Logout = () => {
  console.log("logout")
}

const adminUser = {
  name: "darel",
  email:"darelbavcar1@gmail.com",
  password: "123"
 
}

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(value);
  // };

  useEffect(() => {
    localStorage.setItem("authorized", JSON.stringify(isAuth));
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
        setFormValues,
      
        Login,
        Logout,
        adminUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
