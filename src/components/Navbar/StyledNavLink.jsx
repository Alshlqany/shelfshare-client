/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const StyledNavLink = ({ to, text, icon, admin }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeColor = admin ? "#ceaf00" : "#2C9DB7";

  return (
    <motion.div className="relative px-2 py-1 hover:text-[#2C9DB7]">
      <NavLink
        to={to}
        className={`flex items-center gap-1 font-medium transition-colors duration-300  text-gray-700 `}
        style={isActive ? { color: activeColor } : {}}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.color = activeColor;
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.color = "";
        }}
      >
        {icon}
        {text}
      </NavLink>

      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 bottom-0 h-[2px] w-full rounded"
            transition={{ type: "tween", stiffness: 400, damping: 25 }}
            style={{ backgroundColor: activeColor }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StyledNavLink;
