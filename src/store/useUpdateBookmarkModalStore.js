import { create } from "zustand";

const useUpdateBookmarkModalStore = create((set) => ({
  isOpen: false,
  bookmarkData: null,
  onOpen: (bookmarkData = null) => set({ isOpen: true, bookmarkData }),
  onClose: () => set({ isOpen: false, bookmarkData: null }),
}));

export default useUpdateBookmarkModalStore;
