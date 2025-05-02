import CartItems from "../components/Cart";
import Checkout from "../components/Cart/Checkout";
import TotalPrice from "../components/Cart/TotalPrice";

const Cart = () => {
  return (
    <div
      className="container mx-auto p-4 items-center justify-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <CartItems />
      <div className="flex justify-between mt-3 items-end p-1">
        <TotalPrice />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
