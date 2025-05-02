import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCheckoutMutation } from "../../app/features/ordersApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const Checkout = () => {
  const [checkout, { isLoading }] = useCheckoutMutation();
  const { items } = useSelector((state) => state.cart);
  if (items.length === 0) {
    return null;
  }
  const handleCheckout = async () => {
    try {
      const mappedItems = items.map(({ book, qty }) => ({
        book: book._id,
        qty,
      }));
      const response = await checkout(mappedItems).unwrap();
      window.location.href = response?.url;
    } catch (error) {
      toast.error("Checkout failed:", error?.data?.message);
    }
  };
  return (
    <motion.button
      className="bg-primary text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
      animate={{ scale: 1.1 }}
      whileHover={{ scale: isLoading ? 1.1 : 1.2 }}
      whileTap={{ scale: isLoading ? 1 : 0.9 }}
      disabled={isLoading}
      onClick={handleCheckout}
    >
      Checkout
    </motion.button>
  );
};

export default Checkout;
