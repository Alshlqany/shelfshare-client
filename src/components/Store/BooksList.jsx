import React, { useEffect } from "react";
import { useGetBooksQuery } from "../../app/features/booksApi";
import { useDispatch, useSelector } from "react-redux";

import NoBooksFound from "./NoBooksFound";
import { Navigate, useParams } from "react-router-dom";
import BookCardSkeleton from "../BookCard/BookCardSkeleton";
import BookCard from "../BookCard";
import { setTotalPages } from "../../app/FiltersSlice";

const languages = ["english", "arabic", "kids"];

const BooksList = () => {
  const { language } = useParams();

  const { filters } = useSelector((state) => state.booksFilters);
  const { data, isLoading, isError } = useGetBooksQuery(filters);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(data?.totalPages || 1));
    }
  }, [data, dispatch]);

  const isValidLanguage = !language || languages.includes(language);
  if (!isValidLanguage) return <Navigate to="/books" />;

  if (isLoading)
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5 md:pt-0 ">
        {Array.from({ length: 15 }).map((_, idx) => (
          <BookCardSkeleton key={idx} />
        ))}
      </div>
    );

  if (isError || data?.books.length === 0) return <NoBooksFound />;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5 md:pt-0 ">
      {data?.books.map((book) => (
        <BookCard book={book} key={book._id} />
      ))}
    </div>
  );
};

export default BooksList;
