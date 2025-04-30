import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { items } = useSelector((state) => state.cart);

  const totalPrice = items.reduce((total, item) => {
    const price = item.book.price || 0;
    const qty = item.qty || 1;
    return total + price * qty;
  }, 0);
  if (totalPrice === 0) {
    return null;
  }
  return <div className="text-lg ">Total: {totalPrice.toFixed(2)} EGP</div>;
};

export default TotalPrice;
