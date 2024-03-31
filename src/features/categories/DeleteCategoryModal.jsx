import { HiExclamationTriangle } from "react-icons/hi2";
import Modal from "../../components/Modals/Modal";

import Spinner from "../../components/Spinner";
import useDeleteCategoryModal from "../../store/useDeleteCategoryModalStore";
import { useDeleteCategory } from "./useDeleteCategory";
import { useParams } from "react-router-dom";
import { memo } from "react";

const DeleteCategoryModal = memo(function DeleteCategoryModal() {
  const { collectionId } = useParams();

  const { categoryId, onClose, isOpen } = useDeleteCategoryModal();
  const { isDeleting, deleteCategory } = useDeleteCategory(
    Number(collectionId)
  );

  const handleConfirmDelete = () => {
    if (categoryId) {
      deleteCategory(categoryId);
      !isDeleting && onClose();
    }
  };

  const bodyContent = isDeleting ? (
    <div className="flex py-18 justify-center items-center min-h-[100px] ">
      <Spinner size="huge" />
    </div>
  ) : (
    <div>
      <div className="p-5 sm:p-0">
        <div className="mt-2 text-center sm:text-left">
          <div className="">
            <p className="text-md text-textPrimary500 dark:text-textPrimaryDark">
              Are you sure you want to delete this category? All of your
              bookmarks within this category will be removed permanently from
              our servers forever. This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      onSubmit={handleConfirmDelete}
      icon={
        <HiExclamationTriangle className="text-primary600 dark:text-primaryDark600 h-8 w-8" />
      }
      body={bodyContent}
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Category"
    />
  );
});

export default DeleteCategoryModal;
