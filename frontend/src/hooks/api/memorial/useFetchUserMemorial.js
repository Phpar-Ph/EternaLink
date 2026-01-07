import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../../constants/apiRoutes";

import useAxiosPrivate from "../useAxiosPrivate";
export const useFetchUserMemorial = (id) => {
  const axiosPrivate = useAxiosPrivate();

  const fetchUserMemorial = async () => {
    const response = await axiosPrivate.get(
      API_ROUTES.MEMORIAL.DATA + `/${id}`
    );
   
    return response.data.memorial;
  };

  return useQuery({
    queryKey: ["memorial", id],
    queryFn: () => fetchUserMemorial(),
    onSuccess: (data) => {
      console.log("success fetch memorial profile", data);
    },
    enabled: !!id,
    onError: () => {
      console.log("Failed creating memorial");
    },
  });
};
