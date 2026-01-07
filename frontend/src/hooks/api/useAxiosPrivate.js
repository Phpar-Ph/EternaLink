import { useEffect } from "react";

import { axiosPrivate } from "../../config/axiosPrivate";
import { API_ROUTES } from "../../constants/apiRoutes";
import { BASEURL } from "../../constants/baseUrl";
import axios from "axios";
import { useAuthStore } from "../../store/useAuthStore";
// import { axiosInstance } from "../../config/axiosPrivate";

const useAxiosPrivate = () => {
  // const token = useAuthStore((state) => state.token);
  const { token, setToken } = useAuthStore();
  // const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // console.log("axios interceptors", token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;

        if (error.response?.status === 403 && !originalRequest?._retry) {
          originalRequest._retry = true;

          try {
            const response = await axios.get(
              `${BASEURL}${API_ROUTES.AUTH.REFRESH}`,
              {
                withCredentials: true,
                skipAuthRefresh: true,
              }
            );
            const newToken = response.data.accessToken;

            setToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosPrivate(originalRequest);
          } catch (refreshError) {
            setToken(null);
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [setToken, token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
