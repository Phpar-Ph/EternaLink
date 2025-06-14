import { useEffect, useState } from "react";
import { useStoreToken } from "../../store/useStoreToken";
import { API_ROUTES } from "../../constants/apiRoutes";
import { Outlet } from "react-router";
import { useUserStateStore } from "../../store/usePersistUserStore";
import { useSetLogin } from "../../store/useAuthStore";
// import axiosPrivate from "../api/axiosPrivate";
import { instance } from "../../api/axiosPrivate";
const PersistLogin = () => {
  const persist = useUserStateStore((state) => state.setPersistState);
  const token = useStoreToken((state) => state.accessToken);
  const newToken = useStoreToken((state) => state.setAccessToken);
  const [isLoading, setIsLoading] = useState(true);
  const setLogin = useSetLogin();



  useEffect(() => {
    let isMounted = true;
    const verifyRefresh = async () => {
      try {
        const response = await instance.get(API_ROUTES.AUTH.REFRESH, {
          withCredentials: true,
        });
        const Token = response.data.accessToken;
        newToken(Token);
        setLogin(true);
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !token && persist ? verifyRefresh() : setIsLoading(false);
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
