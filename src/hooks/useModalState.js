import { useState } from "react";

export function useModalState() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function toggleModal() {
    setIsOpen((show) => !show);
  }
  return { isOpen, closeModal, openModal, toggleModal };
}
