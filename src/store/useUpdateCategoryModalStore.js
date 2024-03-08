import { create } from "zustand";

const useUpdateCategoryModalStore = create((set) => ({
  isOpen: false,
  categoryData: null,
  onOpen: (categoryData = null) =>
    set({ isOpen: true, categoryData }),
  onClose: () => set({ isOpen: false,  categoryData: null }),
}));

export default useUpdateCategoryModalStore;
