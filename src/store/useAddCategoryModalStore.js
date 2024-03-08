import { create } from "zustand";

const useAddCategoryModalStore = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddCategoryModalStore;
