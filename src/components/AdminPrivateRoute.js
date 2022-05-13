import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const UsersPrivateRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default UsersPrivateRoute;
