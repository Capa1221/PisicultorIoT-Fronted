import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../../services/interfaces";

const PrivateRoute = ({ children, allowedRoles }: PrivateRouteProps) => {
  const token = sessionStorage.getItem("authToken");
  const userRole = sessionStorage.getItem("userRole");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
