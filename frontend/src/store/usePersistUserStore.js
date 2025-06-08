import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStateStore = create(
  persist(
    (set) => ({
      isPersist: false,
      setPersistState: (value) => set({ isPersist: value }),
    }),
    {
      name: "user-state",
    }
  )
);

// export const usePersist = () => useUserStateStore((state) => state.isPersist);
// export const useSetPersist = () =>
//   useUserStateStore((state) => state.setPersistState);
