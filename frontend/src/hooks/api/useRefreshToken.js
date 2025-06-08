import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../constants/apiRoutes";
import { axiosPrivate } from "../../api/axiosPrivate";

export const useRefresh = () => {
  const refreshToken = async () => {
    const response = await axiosPrivate.get(API_ROUTES.AUTH.REFRESH);
    return response.data.accessToken;
  };

  return useQuery({
    queryKey: ["refresh"],
    queryFn: refreshToken,
    onSuccess: () => {
      console.log("refresh");
    },
  });
};
