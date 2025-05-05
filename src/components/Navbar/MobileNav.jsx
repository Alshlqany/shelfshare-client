/* eslint-disable no-unused-vars */

import { motion, AnimatePresence } from "framer-motion";
import StyledNavLink from "./StyledNavLink";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BurgerIcon from "../ui/BurgerIcon";
import { useState } from "react";
import { LibraryBigIcon } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    closed: { opacity: 0, x: 300 },
    open: { opacity: 1, x: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden">
      <BurgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="absolute top-0 h-screen w-fit  right-0 bg-white px-10 pt-2 pb-4 shadow-lg z-50"
          >
            <nav className="flex flex-col gap-4  justify-center  h-full">
              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="w-fit"
              >
                <StyledNavLink to="/" icon={<HomeIcon />} text="Home" />
              </motion.div>
              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="w-fit"
              >
                <StyledNavLink
                  to="/books"
                  icon={<LibraryBigIcon />}
                  text="Books"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="w-fit"
              >
                <StyledNavLink
                  to="/contact-us"
                  icon={<MailOutlineIcon />}
                  text="Contact us"
                />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
