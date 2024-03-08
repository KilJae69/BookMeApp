import {create} from "zustand";

const useUpdateCollectionModalStore = create((set) => ({
  isOpen: false,
  collectionId: null,
  collectionName: "",
  onOpen: (collectionId, collectionName) =>
    set({ isOpen: true, collectionId, collectionName }),
  onClose: () => set({ isOpen: false, collectionId: null, collectionName: "" }),
}));

export default useUpdateCollectionModalStore;
