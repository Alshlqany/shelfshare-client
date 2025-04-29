import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BookRate = ({ rate }) => {
  return (
    <div className="flex flex-col">
      {[...Array(5)].map((_, index) => {
        const full = index + 1 <= rate;
        const half = index + 0.5 <= rate && index + 1 > rate;

        return full ? (
          <StarIcon key={index} className="text-yellow-500 h-5 w-5" />
        ) : half ? (
          <StarHalfIcon key={index} className="text-yellow-500 h-5 w-5" />
        ) : (
          <StarBorderIcon key={index} className="text-gray-300 h-5 w-5" />
        );
      })}
    </div>
  );
};

export default BookRate;
