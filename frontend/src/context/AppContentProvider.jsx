import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContent = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [memorialData, setMemorialData] = useState(false);
  const getAuthState = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`, {
        withCredentials: true,
      });
      if (data.success) {
        setIsLogin(true);
        await getUserData();
        await getMemorialData();
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setIsLogin(false);
        setUserData(null);
      } else {
        // Show error for other types of errors
        console.error("Auth check error:", error);
        toast.error("Failed to check authentication status");
      }
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        withCredentials: true,
      });
      if (data.success) {
        setUserData(data.userData);
        // toast.success("data fetch");
      } else {
        setUserData(null);
        setIsLogin(false);
      }
    } catch (error) {
      console.error("Get user data error:", error);
      setUserData(null);
      setIsLogin(false);
    }
  };
  const getMemorialData = async (id) => {
    try {
      if (!id) {
        console.warn("No memorial ID provided");
        return;
      }
      const { data } = await axios.get(
        `${backendUrl}/api/create/memorial-profile/${id}`,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setMemorialData(data.memorial);
      }
    } catch (error) {
      console.error("Get user data error:", error);
    }
  };

  useEffect(() => {
    getAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    backendUrl,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    getUserData,
    getAuthState,
    setIsOpen,
    isOpen,
    memorialData,
    getMemorialData,
    setMemorialData,
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
