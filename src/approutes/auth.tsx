import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const token = localStorage.getItem("my-token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
export default AuthRequired;
