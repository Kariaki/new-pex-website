// import { Redirect, Route } from "react-router-dom";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const UsersPrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/users/login" state={{ from: location }} replace />
  );
};

export default UsersPrivateRoute;
