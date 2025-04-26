import React from "react";

const BookCard = ({ book }) => {
  return (
    <div
      key={book._id}
      className="bg-white rounded-lg overflow-hidden w-60 mx-4"
    >
      <div className="h-64 w-full">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover pointer-events-none shadow-xl shadow-slate-900/30 rounded-lg"
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500">{book.author}5</p>
      </div>
    </div>
  );
};

export default BookCard;
