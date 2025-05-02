import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/features/cartSlice";
const AddToCart = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ book, qty: 1 }));
  };

  return (
    <motion.div
      onClick={handleAddToCart}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="bg-primary p-2 flex items-center justify-center rounded-full"
    >
      <AddShoppingCartIcon />
    </motion.div>
  );
};

export default AddToCart;
