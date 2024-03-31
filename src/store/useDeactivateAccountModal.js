import { create } from "zustand";

const useDeactivateAccountModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true, }),
  onClose: () => set({ isOpen: false, }),
}));

export default useDeactivateAccountModal;
