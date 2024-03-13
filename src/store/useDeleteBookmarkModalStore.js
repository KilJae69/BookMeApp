import { create } from "zustand";

const useDeleteBookmarkModal = create((set) => ({
  isOpen: false,
  bookmarkId: null,
  categoryId: null,
  onOpen: (bookmarkId,categoryId) => set({ isOpen: true, bookmarkId, categoryId}),
  onClose: () => set({ isOpen: false, bookmarkId: null, categoryId: null}),
}));

export default useDeleteBookmarkModal;
