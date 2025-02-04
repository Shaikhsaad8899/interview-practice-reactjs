import React from "react";
import withAuth from "./withAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You are authenticated!</p>

      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default withAuth(Dashboard); // Wrap Dashboard with withAuth HOC
