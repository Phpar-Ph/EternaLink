import { create } from "zustand";

export const useStoreMemorial = create((set) => ({
  isCreatingMemorial: false,
  userData: null,
  isLoggingIn: false,
  isSigningUp: false,
  isLoadingToken: false,

  setIsCreatingMemorial: (value) => set({ isCreatingMemorial: value }),
  setUserData: (data) => set({ userData: data }),
  setIsLogin: (value) => set({ isLogin: value }),
  setIsSigningUp: (value) => set({ isSigningUp: value }),
  setIsLoadingToken: (value) => set({ isLoadingToken: value }),
}));
