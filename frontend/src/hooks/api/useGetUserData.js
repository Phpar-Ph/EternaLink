import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../constants/apiRoutes";
import useAxiosPrivate from "./useAxiosPrivate";
import { useIsLogin } from "../../store/useAuthStore";

export const useGetUserData = () => {
  const axiosPrivate = useAxiosPrivate();
  const isLogin = useIsLogin();
  const getUser = async () => {
    const response = await axiosPrivate.get(API_ROUTES.USER.DATA);
    return response.data.userData;
  };
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
    enabled: !!isLogin,
    // 5min fetch
    // staleTime: 5 * 60 * 1000,
  });
};
