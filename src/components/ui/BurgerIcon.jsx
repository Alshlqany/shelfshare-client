import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const trasition = {
  duration: 0.3,
};
const BurgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className="z-50" onClick={toggleMenu}>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="cursor-pointer w-6 h-6 relative z-100"
      >
        <motion.span
          className="absolute top-0 left-0 h-[2px] w-full bg-gray-700"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: 11 },
          }}
          transition={trasition}
        />
        <motion.span
          className="absolute top-1/2 left-0 h-[2px] w-full bg-gray-700"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={trasition}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-700"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: -11 },
          }}
          transition={trasition}
        />
      </motion.div>
    </div>
  );
};

export default BurgerIcon;
