/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const StyledNavLink = ({ to, text, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div className="relative px-2 py-1 ">
      <NavLink
        to={to}
        className={`flex items-center gap-1 font-medium hover:text-[#2C9DB7]  duration-300 text-gray-700 `}
        style={isActive ? { color: "#2C9DB7" } : {}}
      >
        {icon}
        {text}
      </NavLink>

      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 bottom-0 h-[2px] w-full rounded"
          transition={{ type: "tween", stiffness: 400, damping: 25 }}
          style={{ backgroundColor: "#2C9DB7" }}
        />
      )}
    </motion.div>
  );
};

export default StyledNavLink;
