import { HiExclamationTriangle } from "react-icons/hi2";
import Modal from "../../components/Modals/Modal";

import Spinner from "../../components/Spinner.jsx";
import useDeleteBookmarkModal from "../../store/useDeleteBookmarkModalStore.js";
import { useDeleteBookmark } from "./useDeleteBookmark.js";
import { memo } from "react";

const DeleteBookmarkModal = memo(function DeleteBookmarkModal() {
  const { bookmarkId, categoryId, onClose, isOpen } = useDeleteBookmarkModal();
  const { isDeleting, deleteBookmark } = useDeleteBookmark(categoryId, () =>
    onClose()
  );

  const handleConfirmDelete = () => {
    if (bookmarkId) {
      deleteBookmark(bookmarkId);
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
              Are you sure you want to delete this bookmark? This action cannot
              be undone.
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
      title="Delete Bookmark"
    />
  );
});

export default DeleteBookmarkModal;
