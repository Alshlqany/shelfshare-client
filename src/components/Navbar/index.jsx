import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useSelector } from "react-redux";
import StyledNavLink from "./StyledNavLink";
import MobileNav from "./MobileNav";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const isAdmin = useSelector((state) => state.user.role === "admin"); // FIXME:
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-0">
      <nav className="bg-white py-2.5 mx-auto max-w-[1440px] px-6 lg:px-12 flex justify-between items-center h-25">
        <Link to="/">
          <img src={logo} alt="logo" className="w-25 inline-block" />
        </Link>
        <div className="hidden md:flex">
          <StyledNavLink to="/" icon={<HomeIcon />} text="Home" />
          <StyledNavLink to="/shop" icon={<StorefrontIcon />} text="Shop" />
          <StyledNavLink
            to="/contact-us"
            icon={<MailOutlineIcon />}
            text="Contact us"
          />
        </div>
        <div className="flex items-center gap-4">
          <CartIcon />
          <StyledNavLink to="/favorites" icon={<FavoriteBorderIcon />} />
          <StyledNavLink to="/Auth" icon={<PermIdentityIcon />} />
          <MobileNav />
          {isAdmin && (
            <StyledNavLink
              to="/admin"
              icon={<AdminPanelSettingsIcon />}
              admin
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
