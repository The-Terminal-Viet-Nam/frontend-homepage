import type { SafeUser } from "@/typings/tanstack";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  user: SafeUser | null;
  setUser: (user: SafeUser) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    },
  ),
);
