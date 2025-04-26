import { useGetBooksQuery } from "../../app/features/booksApi";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const filters = {
  new: {
    page: 1,
    limit: 10,
  },
  popular: {
    page: 1,
    limit: 10,
    sort: "-soldTimes",
  },
  loved: {
    page: 1,
    limit: 10,
    sort: "-favorites",
  },
};

const BooksSwipper = ({ filterId }) => {
  const { data, isLoading, isError, error } = useGetBooksQuery(
    filters[filterId]
  );

  if (isError) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView="auto"
        grabCursor
        autoplay={{
          delay: 3000,
        }}
      >
        {data?.books.map((book) => (
          <SwiperSlide key={book._id} className="flex justify-center max-w-xs">
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BooksSwipper;
