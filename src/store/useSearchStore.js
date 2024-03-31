
import {create} from "zustand";

const useSearchStore = create((set) => ({
  isLoading: false,
  searchedBookmarks: [],
  searchTerm: "",
  setIsLoading: (isLoading) => set({ isLoading }), 
  setSearchedBookmarks: (bookmarks) =>  set({ searchedBookmarks: bookmarks }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  resetSearch: () => set({ searchedBookmarks: [], searchTerm: "" }),

}));

export default useSearchStore;
