import { useGetBooksQuery } from "../../app/features/booksApi";
import BookCard from "./BookCard";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
  if (isLoading) return <div>Loading...</div>;
  return (
    <motion.div style={{ x }} className="flex">
      {data?.books.map((book) => (
        <BookCard book={book} />
      ))}
    </motion.div>
  );
};

export default BooksRow;
