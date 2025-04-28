import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-red-500 flex-1/7">
      <Link to="/">Back to main</Link>
    </div>
  );
};

export default Sidebar;
