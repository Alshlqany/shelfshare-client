import { ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] pt-[80px] relative overflow-hidden">
      <div className="mb-6 text-primary">
        <ShoppingCart size={100} />
      </div>

      <h1 className="text-4xl font-bold mb-3 text-center">
        Your Cart is Empty
      </h1>

      <p className="text-md text-gray-600 mb-6 max-w-xl text-center">
        It seems like you haven't added any items to your cart yet. Start
        exploring our collection and find something you love!
      </p>

      <div>
        <Link
          to="/books"
          className="px-8 py-3 bg-primary text-white rounded-full shadow-md hover:bg-[#238ca3] transition-transform transform hover:scale-105"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Empty;
