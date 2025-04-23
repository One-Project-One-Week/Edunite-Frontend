import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated } = useAuth();
  const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/" replace state={{ from: location }} />;
//   }

  return <>{children}</>;
};

export default ProtectedRoute;
