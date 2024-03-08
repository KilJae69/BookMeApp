import { create } from "zustand";

const useDeleteCategoryModal = create((set) => ({
  isOpen: false,
  categoryId: null,
  onOpen: (categoryId) => set({ isOpen: true, categoryId }),
  onClose: () => set({ isOpen: false, categoryId: null }),
}));

export default useDeleteCategoryModal;
