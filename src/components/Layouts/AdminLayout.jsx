import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setUser } from "../../app/features/userSlice";
import Sidebar from "../Sidebar";

const token = localStorage.getItem("token");
const AdminLayout = () => {
  const { role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("AdminLayout", token, role);
  if (token && !role) {
    dispatch(setUser(token));
  }

  if (role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
