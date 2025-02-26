import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Correct Axios Interceptor
axios.interceptors.request.use(
  (request) => {
    console.log("Intercepted Request:", request);

    // Example: Add Authorization Header
    const token = localStorage.getItem("authToken");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request; // Always return the modified request
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);