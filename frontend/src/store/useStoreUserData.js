import { create } from "zustand";

const useStoreData = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export const useSetUserData = () => useStoreData((state) => state.setUserData);
export const useUserData = () => useStoreData((state) => state.userData);
