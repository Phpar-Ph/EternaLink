import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLogin: false,
  login: () => set({ isLogin: true }),
  logout: () => set({ isLogin: false }),
}));

export const useIsLogin = () => useAuthStore((state) => state.isLogin);
export const useSetLogin = () => useAuthStore((state) => state.login);
export const useIsLogout = () => useAuthStore((state) => state.logout);
