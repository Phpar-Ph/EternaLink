import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
const ProtectedRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
