import { useDispatch } from "react-redux";
import { removeItem } from "../../app/features/cartSlice";
import { X } from "lucide-react";

const RemoveButton = ({ bookId }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(bookId));
  };

  return (
    <button
      className=" text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
      onClick={handleRemove}
    >
      <X />
    </button>
  );
};

export default RemoveButton;
