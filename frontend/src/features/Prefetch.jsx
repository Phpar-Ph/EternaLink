import { Outlet } from "react-router";
import { useEffect } from "react";
import { queryClient } from "../main";
import { API_ROUTES } from "../constants/apiRoutes";
import useAxiosPrivate from "../hooks/api/useAxiosPrivate";

const Prefetch = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["userData"],
      queryFn: async () => {
        const res = axiosPrivate.get(API_ROUTES.USER.DATA);
        return res.data.userData;
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default Prefetch;
