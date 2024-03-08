import { create } from "zustand";

const useDeleteBookmarkModal = create((set) => ({
  isOpen: false,
  bookmarkId: null,
  onOpen: (bookmarkId) => set({ isOpen: true, bookmarkId }),
  onClose: () => set({ isOpen: false, bookmarkId: null }),
}));

export default useDeleteBookmarkModal;
