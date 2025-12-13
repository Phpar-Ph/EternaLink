import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../../../constants/apiRoutes";
import useAxiosPrivate from "../useAxiosPrivate";

export const useFetchPublicMemorialFeed = () => {
  const axiosPrivate = useAxiosPrivate();
  const feedMemorial = async () => {
    const response = await axiosPrivate.get(API_ROUTES.FEED.FEEDMEMORIAL);
    console.log("API RESPONSE",response.data);
    return response.data.memorialsFeed;
  };

  return useQuery({
    queryKey: ["feedMemorial"],
    queryFn: () => feedMemorial,
    onSuccess: (data) => {
      console.log("success fetch feed memorial", data);
    },
    onError: () => {
      console.log("Failed fetching memorial feed");
    },
  });
};
