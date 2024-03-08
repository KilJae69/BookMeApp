import { create } from "zustand";

const useDeleteCollectionModal = create((set) => ({
  isOpen: false,
  collectionId: null,
  onOpen: (collectionId) => set({ isOpen: true, collectionId }),
  onClose: () => set({ isOpen: false, collectionId: null }),
}));

export default useDeleteCollectionModal;
