import { HiPlus } from "react-icons/hi";
import Button from "../../ui/Button";
import AddCategoryForm from "./AddCategoryForm";
import DialogModal from "../../ui/DialogModal";
import { useModalState } from "../../hooks/useModalState";

function AddCategory() {
  const { isOpen, toggleModal,openModal,closeModal } = useModalState();

  return (
    <div>
      <Button
        onClick={openModal}
        variation="primary"
      >
        <div className="flex gap-2">
          <HiPlus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          <span>New Category</span>
        </div>
      </Button>
  
     
        <DialogModal isOpen={isOpen} setIsOpen={toggleModal}>
          <AddCategoryForm onCloseModal = {closeModal} />
        </DialogModal>
     
    </div>
  );
}

export default AddCategory;
