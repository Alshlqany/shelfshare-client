import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/features/userSlice";

const token = localStorage.getItem("token");
const UserLayout = () => {
  const dispatch = useDispatch();
  if (token) {
    dispatch(setUser(token));
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserLayout;
