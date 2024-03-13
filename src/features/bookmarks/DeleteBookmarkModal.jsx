import { HiExclamationTriangle } from "react-icons/hi2";
import Modal from "../../components/Modals/Modal";

import Spinner from "../../ui/Spinner";
import useDeleteBookmarkModal from "../../store/useDeleteBookmarkModalStore.js";
import { useDeleteBookmark } from "./useDeleteBookmark.js";



function DeleteBookmarkModal() {
 
  const { bookmarkId,categoryId, onClose, isOpen } = useDeleteBookmarkModal();
  const { isDeleting, deleteBookmark } = useDeleteBookmark(categoryId, ()=> onClose());

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
      <div className="p-5">
        <div className="mt-2 text-center">
          <div className="">
            <p className="text-md text-gray-500">
              Are you sure you want to delete this bookmark? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      onSubmit={handleConfirmDelete}
      icon={<HiExclamationTriangle className="text-rose-600 h-8 w-8" />}
      body={bodyContent}
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Bookmark"
    />
  );
}

export default DeleteBookmarkModal;
