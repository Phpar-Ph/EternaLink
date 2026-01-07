import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../../constants/apiRoutes";

import useAxiosPrivate from "../useAxiosPrivate";
export const useFetchMyMemorialPost = (id) => {
  // const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const fetchMyMemorialPost = async () => {
    const response = await axiosPrivate.get(
      API_ROUTES.MEMORIAL.GETPOST + `/${id}`
    );
    console.log("response post",response.data);
    return response.data;
  };

  return useQuery({
    queryKey: ["memorial", id],
    queryFn: ()=> fetchMyMemorialPost(),
    onSuccess: () => {
      console.log("success fetch memorial post");
      // navigate(`/memorial-profile/${id}`);
    },
    enabled: !!id,
    onError: () => {
      console.log("Failed creating memorial");
    },
  });
};
