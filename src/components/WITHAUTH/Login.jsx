import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "token-123");
    navigate("/dashboard");
  };
  return <div>Login</div>;
};

export default Login;
