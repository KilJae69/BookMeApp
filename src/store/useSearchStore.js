
import {create} from "zustand";

const useSearchStore = create((set) => ({
  isLoading: false,
  searchedBookmarks: [],
  setIsLoading: (isLoading) => set({ isLoading }), 
  setSearchedBookmarks: (bookmarks) => {
    console.log("Setting searched bookmarks", bookmarks)
    set({ searchedBookmarks: bookmarks })
},
}));

export default useSearchStore;
