import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className="overflow-hidden h-fit w-fit rounded-full cursor-pointer hover:text-primary  duration-300 text-gray-700"
    >
      <motion.div
        className="relative h-fit w-fit"
        animate={{
          top: isActive ? "-100%" : "0",
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="flex items-center justify-center bg-[#f2fdff]">
          <PermIdentityIcon />
        </div>
        <motion.div
          className=" absolute top-full flex items-center justify-center text-gray-600 bg-[#7de7ff]"
          animate={{ top: isActive ? "0" : "100%" }}
        >
          <CloseIcon />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Button;
