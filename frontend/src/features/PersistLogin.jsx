// import { useEffect, useState } from "react";
// import { usePersist } from "../store/usePersistUserStore";
// import { useStoreToken } from "../store/useStoreToken";
// import axios from "axios";
// import { BASEURL } from "../constants/baseUrl";
// import { API_ROUTES } from "../constants/apiRoutes";
import { Outlet } from "react-router";

const PersistLogin = () => {
  // const persist = usePersist();
  // const token = useStoreToken((state) => state.accessToken);
  // const newToken = useStoreToken((state) => state.setAccessToken);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   let isMounted = true;

  //   const verifyRefresh = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BASEURL}${API_ROUTES.AUTH.REFRESH}`,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       const Token = response.data.accessToken;
  //       newToken(Token);
  //       console.log("im here");
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       isMounted && setIsLoading(false);
  //     }
  //   };

  //   !token && persist ? verifyRefresh() : setIsLoading(false);
  //   return () => (isMounted = false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    // <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
    <Outlet />
  );
};

export default PersistLogin;
