import React, { useState, useCallback } from "react";
import { useReviewBookMutation } from "../../app/features/booksApi";
import toast from "react-hot-toast";
import { StarIcon } from "lucide-react";

const StarRate = ({ bookId, userRating }) => {
  const [tempRating, setTempRating] = useState(null);
  const [persistedRating, setPersistedRating] = useState(null);
  const [reviewBook] = useReviewBookMutation();

  const isRated = userRating !== null;
  const displayRating = tempRating ?? userRating ?? persistedRating;

  const handleRate = useCallback(
    async (newRating) => {
      if (isRated) return;

      const originalRating = persistedRating;
      try {
        setPersistedRating(newRating);
        const res = await reviewBook({ bookId, rate: newRating }).unwrap();
        toast.success(res.message);
      } catch (error) {
        toast.error(error?.data?.message || "Rating update failed");
        setPersistedRating(originalRating);
      }
    },
    [bookId, isRated, persistedRating, reviewBook]
  );

  const handleHover = useCallback(
    (star) => !isRated && setTempRating(star),
    [isRated]
  );

  return (
    <div
      className="flex items-center mt-1"
      onMouseLeave={() => !isRated && setTempRating(null)}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = displayRating >= star;
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleRate(star)}
            onMouseEnter={() => handleHover(star)}
            style={{ cursor: isRated ? "" : "pointer" }}
            className="transition-transform hover:scale-110 focus:outline-none"
          >
            <StarIcon
              size={20}
              className={`${
                isFilled ? "text-yellow-500" : "text-gray-400"
              } transition-colors duration-150`}
              fill={isFilled ? "currentColor" : "none"}
              strokeWidth={isFilled ? 0 : 1.5}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRate;
