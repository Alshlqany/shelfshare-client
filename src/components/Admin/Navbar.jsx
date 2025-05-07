import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userSlice";
import { LogOutIcon } from "lucide-react";

const activeClass = " bg-primary/20 border-r-5";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full h-16 overflow-hidden text-primary bg-white flex items-center justify-between px-4 z-50 shadow-lg">
        <img src={logo} alt="logo" className="h-25 mt-3" />
        <div className="flex items-center gap-4">
          <NavLink
            to="stats"
            className={({ isActive }) => ` ${isActive ? "border-b-2" : ""}`}
          >
            Stats
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) => ` ${isActive ? "border-b-2" : ""}`}
          >
            Users
          </NavLink>
          <NavLink
            to="books"
            className={({ isActive }) => ` ${isActive ? "border-b-2" : ""}`}
          >
            Books
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) => ` ${isActive ? "border-b-2" : ""}`}
          >
            Orders
          </NavLink>
          <button
            onClick={handleLogout}
            className="hover:underline text-red-600"
          >
            <LogOutIcon size={20} />
          </button>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col sticky top-0 left-0 h-screen w-64 text-primary bg-white pl-5 z-50 shadow-lg">
        <div className="h-50 flex">
          <img src={logo} alt="logo" className="object-cover" />
        </div>

        <nav className="flex flex-col gap-1 text-base font-medium">
          <NavLink
            to="stats"
            className={({ isActive }) =>
              `hover:border-r-5 hover:bg-primary/20 p-3 ${
                isActive ? activeClass : ""
              }`
            }
          >
            Stats
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `hover:border-r-5 hover:bg-primary/20 p-3 ${
                isActive ? activeClass : ""
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="books"
            className={({ isActive }) =>
              `hover:border-r-5 hover:bg-primary/20 p-3 ${
                isActive ? activeClass : ""
              } `
            }
          >
            Books
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) =>
              `hover:border-r-5 hover:bg-primary/20 p-3 ${
                isActive ? activeClass : ""
              }`
            }
          >
            Users
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="hover:underline mx-auto mb-5 text-red-600 mt-auto flex items-center gap-2"
        >
          Logout <LogOutIcon size={20} />
        </button>
      </aside>
    </>
  );
};

export default Navbar;
