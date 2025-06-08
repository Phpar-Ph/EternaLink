import { Navigate, Outlet } from "react-router";
import { useIsLogin } from "../../store/useAuthStore";
const ProtectedRoute = () => {
  const isLogin = useIsLogin();

  return isLogin ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoute;
