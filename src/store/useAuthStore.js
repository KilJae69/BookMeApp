import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: ({ id,role, username, avatar }) =>
    set({ user: { id,role, username, avatar }, isAuthenticated: role==="authenticated" }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
