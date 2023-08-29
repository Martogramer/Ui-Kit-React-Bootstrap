import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/Store";

const PrivateRoute = ({ children, requiredRoles }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const userRole = useSelector((state) => state.login.userRole);

  if (isAuthenticated) {
    if (requiredRoles.includes(userRole)) {
      return <>{children}</>;
    } else {
      // Usuario autenticado, pero no tiene permisos suficientes
      return <Navigate to="/unauthorized" />;
    }
  } else {
    // Usuario no autenticado
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
