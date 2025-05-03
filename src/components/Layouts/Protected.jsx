import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { token } = useSelector((state) => state.user);
  if (!token) return <Navigate to="/login" replace />;

  return <div>{children}</div>;
};

export default Protected;
