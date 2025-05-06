import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";
import { useDispatch } from "react-redux";
import { setUser } from "./app/features/userSlice";
const token = localStorage.getItem("token");
function App() {
  const dispatch = useDispatch();
  if (token) {
    dispatch(setUser(token));
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
