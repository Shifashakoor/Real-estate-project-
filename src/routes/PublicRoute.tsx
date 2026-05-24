import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;