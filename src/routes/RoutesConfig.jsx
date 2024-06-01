import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../Pages/home/Home.jsx";
import LoginPage from "../Pages/LoginPage/LoginPage.jsx";
import SignUpPage from "../Pages/SignupPage/SignupPage.jsx";

export const homeRoutes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
];
