import { create } from "zustand";



const useAuthStore = create((set) => ({
  user: null,
  isInitialized: false,
  setUser: (user) => {

    set({ user });
  },
  clearUser: () => set({ user: null }),
  setInitialized: () => set({ isInitialized: true }),
}));

export default useAuthStore;
