import { useMutation } from "@tanstack/react-query";
import { API_ROUTES } from "../constants/apiRoutes";
import { axiosInstance } from "../config/axiosPrivate";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();

  const { setIsLogin, setUserData, setToken } = useAuthStore();

  const loginRequest = async (data) => {
    const res = await axiosInstance.post(API_ROUTES.AUTH.LOGIN, data, {
      withCredentials: true,
    });

    return res.data;
  };

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setIsLogin(true);
      setUserData(data);
      setToken(data.accessToken);

      console.log("Login succesfully");
      navigate("/home");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();

  const { setIsLogin, setUserData, setToken } = useAuthStore();

  const signUpRequest = async (data) => {
    const res = await axiosInstance.post(API_ROUTES.AUTH.REGISTER, data, {
      withCredentials: true,
    });

    return res.data;
  };

  return useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      setIsLogin(true);
      setUserData(data);
      setToken(data.accessToken);
      console.log("sign up succesfully");
      navigate("/home");
    },
    onError: (error) => {
      console.log("Signingup failed", error);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setIsLogin, setUserData, setToken } = useAuthStore();

  const logoutRequest = async () => {
    await axiosInstance.post(API_ROUTES.AUTH.LOGOUT);
  };

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      setIsLogin(false);
      setUserData(null);
      setToken(null);
      navigate("/");
      console.log("logout succesfully");
    },
    onError: (error) => {
      console.log("Error loggingout", error);
    },
  });
};
