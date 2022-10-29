import React from "react";
import { Route, Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuth: isAuth, component: Details, ...rest }) => {
  return (
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
  );
};

export default ProtectedRoute;
