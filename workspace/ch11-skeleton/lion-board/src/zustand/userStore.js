import { create } from "zustand";

const useUserStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  resetUser: (user) => set({ user: null }),
}));

export default useUserStore;
