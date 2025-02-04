import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../Context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { color, setColor } = useContext(Context)
  const handleLogin = () => {
    console.log("Login Successful");

    localStorage.setItem("token", "token-123"); // Simulated authentication
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  return (
    <>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      <h2>Login Page</h2>
      <h4>The color is {color}</h4>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login;
