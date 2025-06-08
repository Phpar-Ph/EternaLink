import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../constants/apiRoutes";
import useAxiosPrivate from "./useAxiosPrivate";
export const useGetUserData = () => {
  const axiosPrivate = useAxiosPrivate();
  const getUser = async () => {
    const response = await axiosPrivate.get(API_ROUTES.USER.DATA);
    console.log(response.data);
    return response.data.userData;
  };
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
    // 5min fetch
    // staleTime: 5 * 60 * 1000,
  });
};
