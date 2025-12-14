import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../../constants/apiRoutes";
import useAxiosPrivate from "../useAxiosPrivate";

export const useFetchPublicMemorialFeed = () => {
  const axiosPrivate = useAxiosPrivate();
  const feedMemorial = async () => {
    const response = await axiosPrivate.get(API_ROUTES.FEED.FEEDMEMORIAL);
    return response.data;
  };

  return useQuery({
    queryKey: ["feedMemorial"],
    queryFn: feedMemorial,
    onError: (error) => {
      console.log("Failed fetching memorial feed", error);
    },
  });
};
