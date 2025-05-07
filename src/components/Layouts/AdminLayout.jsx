import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Admin/Navbar";

const AdminLayout = () => {
  const { role } = useSelector((state) => state.user);
  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex flex-col gap-5 md:flex-row w-full h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
