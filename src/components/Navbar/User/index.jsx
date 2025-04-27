import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import Button from "./Button";
import Menu from "./Menu";

const User = () => {
  const [isActive, setIsActive] = useState(false);
  const userRef = useRef(null);
  const variants = {
    open: {
      width: 170,
      height: 200,
      top: -10,
      right: -10,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      width: "95%",
      height: "95%",
      top: 0.5,
      right: 0.7,
      transition: {
        duration: 0.5,
        delay: 0.15,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  useEffect(() => {
    const handleClick = (event) => {
      if (
        (userRef.current && !userRef.current.contains(event.target)) ||
        event.target.classList.contains("user-menu-link")
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={userRef} className="relative z-50">
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        className="bg-[#4ab3ca] rounded-3xl absolute"
      >
        <AnimatePresence>{isActive && <Menu />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default User;
