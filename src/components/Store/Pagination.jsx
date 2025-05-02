import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../app/FiltersSlice";
import Pagination from "../ui/Pagination";

const Pages = () => {
  const {
    totalPages,
    filters: { page },
  } = useSelector((state) => state.booksFilters);

  const dispatch = useDispatch();
  return (
    <Pagination
      totalPages={totalPages}
      page={page}
      onChange={(_, newPage) => {
        dispatch(setFilter({ page: newPage }));
      }}
    />
  );
};

export default Pages;
