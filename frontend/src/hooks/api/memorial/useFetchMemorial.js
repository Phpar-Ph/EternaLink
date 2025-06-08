import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { API_ROUTES } from "../../../constants/apiRoutes";

import useAxiosPrivate from "../useAxiosPrivate";
export const useFetchMemorial = () => {
  // const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const createMemorial = async (id) => {
    const response = await axiosPrivate.get(
      API_ROUTES.MEMORIAL.DATA + `/${id}`
    );
    return response.data.memorial;
  };

  return useQuery({
    queryKey: ["memorial", id],
    queryFn: () => createMemorial(id),
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
