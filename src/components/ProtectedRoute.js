import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
const ProtectedRoute = ({ isAuth: isAuth, component: Details, ...rest }) => {
  return (
   <Routes>
    <Route
      {...rest}
      render={(props) => {
        
        if (isAuth) {
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
    </Routes>
  );
};

export default ProtectedRoute;
