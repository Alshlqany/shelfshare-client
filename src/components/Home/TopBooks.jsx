import React from "react";
import Title from "./Title";
import BooksSwipper from "./BooksSwiper";

const TopBooks = ({ filterId = "new", title = "Bestselling Books" }) => {
  return (
    <div className="mt-15">
      <Title title={title} />
      <BooksSwipper filterId={filterId} />
    </div>
  );
};

export default TopBooks;
