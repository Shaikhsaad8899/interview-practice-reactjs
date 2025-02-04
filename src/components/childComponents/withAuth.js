import React from "react";
import { Navigate } from "react-router"; // Redirect user if not authenticated

const WithAuth = (WrappedComponent) => {
  return function AuthComponentss(props) {
    const isAuthenticated = localStorage.getItem("token"); // Simulated auth

    if (!isAuthenticated) {
      return <Navigate to="/login" />; // Redirect to login page if not authenticated
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
