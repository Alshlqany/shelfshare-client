import { useState } from "react";
import { useGetFavoritesQuery } from "../../app/features/favoritesApi";
import BookCard from "../BookCard";
import BookCardSkeleton from "../BookCard/BookCardSkeleton";
import NoBooksFound from "../Store/NoBooksFound";
import Pagination from "../ui/Pagination";
const FavoritesList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError } = useGetFavoritesQuery(page);

  if (isLoading || isFetching)
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5 md:pt-0 ">
        {Array.from({ length: 15 }).map((_, idx) => (
          <BookCardSkeleton key={idx} />
        ))}
      </div>
    );

  if (isError || data?.favoriteList?.length === 0) return <NoBooksFound />;
  return (
    <div className="flex flex-col items-center gap-4 mb-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5 md:pt-0 ">
        {data?.favoriteList.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
      <Pagination
        totalPages={data?.totalPages}
        page={page}
        onChange={(_, newPage) => {
          setPage(newPage);
        }}
      />
    </div>
  );
};

export default FavoritesList;
