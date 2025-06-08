import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStateStore = create(
  persist(
    (set) => ({
      persist: false,
      setPersistState: (value) => set({ persist: value }),
    }),
    {
      name: "user-state",
    }
  )
);

export const usePersist = () => useUserStateStore((state) => state.persist);
export const useSetPersist = () =>
  useUserStateStore((state) => state.setPersistState);
