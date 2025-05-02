import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import UserLayout from "./components/Layouts/UserLayout";
import AdminLayout from "./components/Layouts/AdminLayout";
import Cart from "./pages/Cart";
import BooksLayout from "./components/Store";
import BooksList from "./components/Store/BooksList";
import Success from "./pages/sucess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { element: <Home />, index: true },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "books",
        element: <BooksLayout />,
        children: [
          { index: true, element: <BooksList /> },
          {
            path: ":language",
            element: <BooksList />,
          },
        ],
      },
      { path: "success", element: <Success /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        element: <div className="bg-orange-400 w-full">Admin Dashboard</div>,
        index: true,
      },
    ],
  },
]);

export default router;
