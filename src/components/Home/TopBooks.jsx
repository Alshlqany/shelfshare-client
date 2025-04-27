import React from "react";
import Title from "./Title";
import BooksSwipper from "./BooksSwiper";

const TopBooks = ({ filterId = "new", title = "Best selling" }) => {
  return (
    <div className="mt-15">
      <div className="w-full flex justify-center">
        <Title title={title} />
      </div>
      <BooksSwipper filterId={filterId} />
    </div>
  );
};

export default TopBooks;
