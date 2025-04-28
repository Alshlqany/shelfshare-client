import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserLayout from "./components/UserLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

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
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
