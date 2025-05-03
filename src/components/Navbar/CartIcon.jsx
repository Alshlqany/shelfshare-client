import StyledNavLink from "./StyledNavLink";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="relative">
      <span className="absolute top-0 right-0.5 z-1 bg-primary rounded-full w-4 h-4 text-white text-xs flex items-center justify-center ">
        {items.length}
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
