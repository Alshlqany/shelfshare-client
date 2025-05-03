/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import hero2 from "../../assets/hero-2.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center min-h-screen px-5">
      <motion.div
        className="flex flex-col items-start text-left md:w-1/2  space-y-6"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Discover Your Next Favorite Book on
          <span className="text-primary"> ShelfShare</span>
        </h1>
        <p className="text-gray-500 text-lg">
          From timeless classics to trending bestsellers — explore, share, and
          fall in love with books all over again.
        </p>
        <Link
          to="/books"
          className="bg-primary text-white rounded-full px-6 py-3 text-lg shadow-lg hover:bg-[#238ca3] transition"
        >
          Browse Collection
        </Link>
      </motion.div>

      <div className="flex justify-center items-center md:w-1/2 mt-20">
        <motion.img
          src={hero2}
          alt="Bookshelf Illustration"
          className="w-full max-w-md md:max-w-lg"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
