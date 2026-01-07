import { useEffect } from "react";
import { Outlet } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";
import { API_ROUTES } from "../../constants/apiRoutes";
import axios from "axios";
import { BASEURL } from "../../constants/baseUrl";

const PersistLogin = () => {
  // const setToken = useAuthStore((state) => state.setToken);
  const [isLoading, setIsLoading] = useState(true);
  // const setIsLogin = useAuthStore((state) => state.setIsLogin);
  // const token = useAuthStore((state) => state.token);
  const { token, setIsLogin, setToken, setIsLoadingToken } = useAuthStore();
  // const setIsLoadingToken = useAuthStore((state) => state.setIsLoadingToken);

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      setIsLoadingToken(true);
      try {
        const res = await axios.get(BASEURL + API_ROUTES.AUTH.REFRESH, {
          withCredentials: true,
        });
        // console.log("data",res.data)
        // setUserData(res.data.user);
        setToken(res.data.accessToken);

        setIsLogin(true);
      } catch (err) {
        console.log("Error fetching refresh token : ", err);
      } finally {
        if (isMounted) setIsLoading(false);
        setIsLoadingToken(false);
      }
    };
    if (!token) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
    return () => (isMounted = false);
  }, [setIsLoading, setIsLogin, setToken, token, setIsLoadingToken]);

  if (isLoading) return <p>Loading...</p>;

  // console.log(userData);
  // console.log(token);
  return (
    <>
      <Outlet />
    </>
  );
};

export default PersistLogin;
