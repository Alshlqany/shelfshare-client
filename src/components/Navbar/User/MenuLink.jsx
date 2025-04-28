import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/features/userSlice";

const prespective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: {
        duration: 0.5,
      },
      delay: 0.5 + i / 10,
      ease: [0.215, 0.61, 0.335, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const MenuLink = ({ to, idx, label, icon, logout: out }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="perspective-[120px] ">
      <motion.div
        variants={prespective}
        animate="enter"
        exit="exit"
        initial="initial"
        custom={idx}
        className="flex items-center justify-start gap-2 hover:text-[#c5f4ff] transition-colors duration-300 cursor-pointer"
      >
        {icon}
        {out && (
          <div className="user-menu-link w-full" onClick={handleLogout}>
            {label}
          </div>
        )}
        {!out && (
          <Link to={to} className="user-menu-link w-full">
            {label}
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default MenuLink;
