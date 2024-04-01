import {create} from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";


const storage = createJSONStorage(() => localStorage);

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme-preference");
  if (savedTheme)  return savedTheme;
  

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  
};

const useThemeStore = create(
  persist(
    (set) => ({
      theme: getInitialTheme(), 
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
