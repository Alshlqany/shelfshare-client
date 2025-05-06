import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-300 w-1/7 items-center h-screen">
      <img src={logo} alt="Logo" />
      <NavLink to="/">Back to main</NavLink>
    </div>
  );
};

export default Sidebar;
