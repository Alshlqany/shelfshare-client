import React from "react";
import img from "../..//assets/hero-1.png";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const isloggedIn = useSelector((state) => state.user.token);
  if (isloggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <img src={img} className="flex-1  w-md hidden md:block" />
      <div className="flex-1 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Auth;
