import { create } from "zustand";

export const useStoreToken = create((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => ({
    accessToken: null,
  }),
}));
