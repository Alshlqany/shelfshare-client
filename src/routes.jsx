import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserLayout from "./components/UserLayout";

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
        element: (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);

export default router;
