import React from "react";
import FavoritesList from "../components/Favorites";
import Title from "../components/ui/Title";
import Pagination from "../components/ui/Pagination";

const Favorites = () => {
  return (
    <div
      className="flex flex-col items-center justify-start w-full p-4 md:p-6 gap-6 min-h-screen mt-30"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <Title title="My Favorites" color="var(--color-primary)" />
      <FavoritesList />
      
    </div>
  );
};

export default Favorites;
