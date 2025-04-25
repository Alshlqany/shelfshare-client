import React from "react";
import StyledNavLink from "./StyledNavLink";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartIcon = () => {
  return (
    <div className="relative">
      <span className="absolute top-0 right-0.5 z-1 bg-red-500 rounded-full w-4 h-4 text-white text-xs flex items-center justify-center ">
        5 {/* TODO: Replace actual card items (number) */}
      </span>

      <StyledNavLink
        to="/cart"
        icon={<ShoppingCartOutlinedIcon />}
        className="relative flex items-center justify-center"
      />
    </div>
  );
};

export default CartIcon;
