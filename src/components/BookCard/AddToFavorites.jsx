import { Heart } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useToggleFavoriteMutation } from "../../app/features/favoritesApi";
import toast from "react-hot-toast";

const AddToFavorites = ({ bookId, isFavorited }) => {
  const [isFav, setIsFav] = useState(isFavorited);
  const [toggleFavorite] = useToggleFavoriteMutation();

  const handleToggle = async () => {
    try {
      setIsFav((prev) => !prev);
      const response = await toggleFavorite(bookId).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
      setIsFav((prev) => !prev);
    }
  };

  return (
    <motion.div
      onClick={handleToggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="relative group cursor-pointer transition-colors"
    >
      <Heart
        className="transition-colors duration-300"
        size={24}
        strokeWidth={2}
        color={isFav ? "var(--color-primary)" : "white"}
        fill={isFav ? "var(--color-primary)" : "none"}
      />
    </motion.div>
  );
};

export default AddToFavorites;
