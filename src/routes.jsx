import { createBrowserRouter, Navigate } from "react-router-dom";
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
import Cancel from "./pages/Cancel";
import Favorites from "./pages/Favorites";
import Protected from "./components/Layouts/Protected";
import Profile from "./pages/Profile";
import { Books, Orders, Stats, Users } from "./pages/Admin";

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
      {
        path: "/favorites",
        element: (
          <Protected>
            <Favorites />
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
      { path: "success", element: <Success /> },
      { path: "cancel", element: <Cancel /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="stats" replace /> },
      { path: "stats", element: <Stats /> },
      { path: "orders", element: <Orders /> },
      { path: "books", element: <Books /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

export default router;
