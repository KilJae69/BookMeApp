import {create} from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";


const storage = createJSONStorage(() => localStorage);

const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light", 
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-preference", 
      storage, 
    }
  )
);

export default useThemeStore;
