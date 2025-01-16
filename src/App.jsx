import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/pages/LoginForm"; 
import RegisterForm from "./components/pages/RegisterForm"; 
import UserProfile from "./components/pages/UserProfile"; 
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
