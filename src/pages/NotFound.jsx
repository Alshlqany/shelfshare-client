import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative overflow-hidden">
      <div className="text-9xl font-extrabold text-[#2C9DB7] mb-6 animate-pulse">
        404
      </div>

      <h1 className="text-4xl font-semibold mb-4 animate-fade-in opacity-80 transition-opacity duration-700 delay-300">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-700 opacity-80 mb-8 text-center max-w-lg animate-fade-in transition-opacity duration-700 delay-400">
        Looks like you've ventured into a land that doesn't exist. But don't
        worry, you can always find your way back home.
      </p>

      <Link
        to="/"
        className="px-8 z-1 py-3 bg-[#2C9DB7] text-white rounded-full shadow-lg hover:bg-[#238ca3] transition-transform transform hover:scale-105 duration-300"
      >
        Go Back Home
      </Link>

      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#2C9DB7] rounded-full opacity-20 "></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#1ed6ff] rounded-full opacity-15 "></div>
      <div className="absolute bottom-5 right-5 w-20 h-20 bg-[#7ce3fa] rounded-full opacity-30 "></div>
      <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-[#2C9DB7] rounded-full opacity-10 "></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#0f8ca8] rounded-full opacity-20 "></div>
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-[#01b7e0] rounded-full opacity-25 "></div>
    </div>
  );
};

export default NotFound;
