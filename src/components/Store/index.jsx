import { Outlet } from "react-router-dom";
import Pages from "./Pagination";
import PriceRange from "./PriceRange";
import SortBy from "./SortBy";
import Categories from "./Categories";
import Search from "./Search";
import Tabs from "./Tabs";

const BooksLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-6 gap-6 min-h-screen mt-30">
      <aside className="md:block w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <Tabs />
        <Search />
        <SortBy />
        <Categories />
        <PriceRange />
      </aside>
      <main className="w-full items-center md:w-2/3 lg:w-3/4 flex flex-col gap-6 border-t-1 md:border-l-1 px-4 md:border-t-0 border-primary">
        <Outlet />
        <Pages />
      </main>
    </div>
  );
};

export default BooksLayout;
