import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../../constants/apiRoutes";

import useAxiosPrivate from "../useAxiosPrivate";
export const useFetchMemorial = (id) => {
  // const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const createMemorial = async () => {
    const response = await axiosPrivate.get(
      API_ROUTES.MEMORIAL.DATA + `/${id}`
    );
    return response.data.memorial;
  };

  return useQuery({
    queryKey: ["memorial", id],
    queryFn: () => createMemorial,
    onSuccess: () => {
      console.log("success fetch memorial profile");
      // navigate(`/memorial-profile/${id}`);
    },
    enabled: !!id,
    onError: () => {
      console.log("Failed creating memorial");
    },
  });
};
