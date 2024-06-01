import React from "react";
import Login from "../../components/loginComponents/Login";
import "../../tailwind/App.css";

const LoginPage = () => {
  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <Login />
    </div>
  );
};

export default LoginPage;
