import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserLayout from "./components/UserLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
