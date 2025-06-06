import { useGetBooksQuery } from "../../app/features/booksApi";
import BookCardSkeleton from "../BookCard/BookCardSkeleton";
import BookCard from "../BookCard";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const filters = {
  new: {
    page: 1,
    limit: 10,
    sort: "-createdAt",
  },
  best: {
    page: 1,
    limit: 10,
    sort: "-soldTimes",
  },
  rate: {
    page: 1,
    limit: 10,
    sort: "-rate",
  },
};

const BooksRow = ({ filterId, x }) => {
  const { data, isLoading, isError, error } = useGetBooksQuery(
    filters[filterId]
  );

  if (isError) return <div>{error.message}</div>;
  if (isLoading)
    return (
      <motion.div style={{ x }} className="flex gap-5">
        {Array.from({ length: 10 }).map((_, idx) => (
          <BookCardSkeleton key={idx} />
        ))}
      </motion.div>
    );

  return (
    <motion.div style={{ x }} className="flex">
      {data?.books.map((book) => (
        <BookCard book={book} key={book._id} />
      ))}
    </motion.div>
  );
};

export default BooksRow;
