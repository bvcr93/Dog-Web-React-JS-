import React, { useContext } from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoute = () => {
  const { isAuth } = useContext(UserContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
