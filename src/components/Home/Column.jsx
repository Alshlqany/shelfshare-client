/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      className=" h-[100%]  relative flex flex-col gap-3 min-w-[250px] nth-of-type-[1]:-top-[45%] nth-of-type-[2]:-top-[80%] nth-of-type-[3]:-top-[25%] nth-of-type-[4]:-top-[75%] "
    >
      {images.map((src, idx) => {
        return (
          <div key={idx} className="w-[100%] relative ">
            <img
              src={`/books/${src}`}
              className="rounded-2xl object-fit-cover"
              alt="image"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
