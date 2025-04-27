import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Button from "./Button";

const User = () => {
  const [isActive, setIsActive] = useState(false);
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
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="relative z-50 h-fit">
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        className="bg-[#4ab3ca] rounded-3xl absolute"
      ></motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default User;

// {isAdmin && (
//             <StyledNavLink
//               to="/admin"
//               icon={<AdminPanelSettingsIcon />}
//               admin
//             />
//           )}
