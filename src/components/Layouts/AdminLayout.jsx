import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";

const AdminLayout = () => {
  const { role } = useSelector((state) => state.user);
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
