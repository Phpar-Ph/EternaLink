import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: false,
  userData: null,
  // isLoggingIn: false,
  // isSigningUp: false,
  isLoadingToken: false,
  token: null,
  // setIsLoggingIn: (value) => set({ isLoggingIn: value }),

  setUserData: (data) => set({ userData: data }),
  setIsLogin: (value) => set({ isLogin: value }),
  // setIsSigningUp: (value) => set({ isSigningUp: value }),
  setToken: (value) => set({ token: value }),
  setIsLoadingToken: (value) => set({ isLoadingToken: value }),
}));
