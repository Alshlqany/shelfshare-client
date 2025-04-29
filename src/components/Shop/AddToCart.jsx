import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const AddToCart = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="bg-primary w-fit h-fit p-3 rounded-full"
    >
      <AddShoppingCartIcon />
    </motion.div>
  );
};

export default AddToCart;
