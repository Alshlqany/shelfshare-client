/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledNavLink from "./StyledNavLink";
import MobileNav from "./MobileNav";
import CartIcon from "./CartIcon";
import { motion } from "framer-motion";
import User from "./User";

const Navbar = () => {
  return (
    <header className="bg-[#f2fdff] w-full fixed top-0 left-0 z-50">
      <motion.div className="container mx-auto px-5 py-2 w-full">
        <nav className="flex justify-between items-center h-20">
          <Link to="/">
            <motion.img
              src={logo}
              alt="logo"
              className="w-30 inline-block mt-5"
              initial={{ x: -500 }}
              animate={{ x: 0 }}
            />
          </Link>
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            className="hidden md:flex gap-4"
          >
            <StyledNavLink to="/" icon={<HomeIcon />} text="Home" />
            <StyledNavLink to="/shop" icon={<StorefrontIcon />} text="Shop" />
            <StyledNavLink
              to="/contact-us"
              icon={<MailOutlineIcon />}
              text="Contact us"
            />
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
          >
            <CartIcon />
            <StyledNavLink to="/favorites" icon={<FavoriteBorderIcon />} />
            <User />
            <MobileNav />
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
