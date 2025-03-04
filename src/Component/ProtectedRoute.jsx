import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);
  console.log(user, "from protected");

  if (!user?.isAuthenticated) {
    return <Navigate to="/signIn" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
