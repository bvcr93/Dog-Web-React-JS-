import React, {useContext} from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { UserContext } from "./UserContext";


const ProtectedRoute = ({ component: Details, ...rest }) => {

  const {isAuth} = useContext(UserContext)
  return (
   
    <Route
      {...rest}
      render={(props) => {
        
        if (isAuth === true) {
          return <Details />;
        } else {
          return (
            <Navigate
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />

  );
};

export default ProtectedRoute;
