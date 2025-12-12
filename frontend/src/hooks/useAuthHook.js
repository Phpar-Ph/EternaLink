import { useMutation } from "@tanstack/react-query";
import { API_ROUTES } from "../constants/apiRoutes";
import { axiosInstance } from "../config/axiosPrivate";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggingIn, setIsLogin } = useAuthStore();
  const setUserData = useAuthStore((state) => state.setUserData);
  const setToken = useAuthStore((state) => state.setToken);
  const login = async (data) => {
    setIsLoggingIn(true);
    try {
      const res = await axiosInstance.post(API_ROUTES.AUTH.LOGIN, data, {
        withCredentials: true,
      });

      setUserData(res.data);
      setToken(res.data.accessToken);
    } catch (err) {
      console.log("Error Login", err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return useMutation({
    mutationKey: ["userData"],
    mutationFn: login,
    onSuccess: () => {
      setIsLogin(true);
      console.log("Login succesfully");
      navigate("/home");
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setIsSigningUp, setIsLogin } = useAuthStore();

  const setUserData = useAuthStore((state) => state.setUserData);
  const setToken = useAuthStore((state) => state.setToken);
  const signUp = async (data) => {
    setIsSigningUp(true);
    try {
      const res = await axiosInstance.post(API_ROUTES.AUTH.REGISTER, data, {
        withCredentials: true,
      });
      setUserData(res.data);
      setToken(res.data.accessToken);
    } catch (err) {
      console.log("Error sign up", err);
    } finally {
      setIsSigningUp(false);
    }
  };

  return useMutation({
    mutationKey: ["userData"],
    mutationFn: signUp,
    onSuccess: () => {
      setIsLogin(true);
      console.log("sign up succesfully");
      navigate("/home");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  const setUserData = useAuthStore((state) => state.setUserData);
  const logout = async () => {
    try {
      await axiosInstance.post(API_ROUTES.AUTH.LOGOUT);
      setUserData(null);
    } catch (err) {
      console.log("Error logging out", err);
    }
  };

  return useMutation({
    mutationKey: ["userData"],
    mutationFn: logout,
    onSuccess: () => {
      setIsLogin(false);
      navigate("/");
      console.log("logout succesfully");
    },
  });
};
