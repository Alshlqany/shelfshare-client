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
      <div className="px-5 py-10 flex-1 mt-15 md:mt-0 mb-5">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
