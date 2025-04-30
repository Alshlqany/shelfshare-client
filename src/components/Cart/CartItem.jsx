import React from "react";
import Input from "../ui/NumberInput";
import RemoveButton from "./RemoveButton";

const CartItem = ({ item }) => {
  const { book, qty } = item;
  const totalPrice = (book.price * qty).toFixed(2);

  return (
    <div className="flex items-stretch gap-4 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-200 h-36 rounded-lg overflow-hidden pr-4 bg-white">
      <img
        src={book.image}
        alt={book.title}
        className="w-24 h-full object-cover bg-gray-100"
      />

      <div className="flex  justify-between flex-grow py-3">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {book.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {book.mainCategory} • {book.subCategory}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Qty:</span>
            <Input value={qty} min={1} max={99} bookId={book._id} />
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <RemoveButton bookId={book._id} />
          <div className=" flex flex-col items-end">
            <p className="text-xs md:text-sm text-gray-600">
              <span className="text-gray-500">Item:</span> $
              {book.price.toFixed(2)}
            </p>
            <p className="text-sm md:text-lg font-bold text-primary mt-1 ">
              {totalPrice} EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
