import { create } from "zustand";

const useAddCollectionModalStore = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddCollectionModalStore;
