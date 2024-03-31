import { HiExclamationTriangle } from "react-icons/hi2";
import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modals/Modal";
import useDeleteCollectionModal from "../../store/useDeleteCollectionModal";
import { useDeleteCollection } from "./useDeleteCollection";
import { useCollections } from "./useCollections";
import Spinner from "../../components/Spinner";
import useAuthStore from "../../store/useAuthStore";

const DeleteCollectionModal = memo(function DeleteCollectionModal() {
  const { user } = useAuthStore();
  const { collectionId: currentCollectionId } = useParams();
  const navigate = useNavigate();
  const { collectionId, onClose, isOpen } = useDeleteCollectionModal();
  const { isDeleting, deleteCollection } = useDeleteCollection();
  const { collections } = useCollections(user?.id);

  function handleNavigation() {
    const isEqual = Number(currentCollectionId) === collectionId;
    const isFirst = collections[0].id === collectionId;

    isEqual &&
      navigate(
        `/${collections[0].id}?name=${encodeURIComponent(
          collections[0].collection_name
        )}`
      );

    isFirst &&
      navigate(
        `/${collections[1].id}?name=${encodeURIComponent(
          collections[1].collection_name
        )}`
      );
  }

  const handleConfirmDelete = () => {
    if (collectionId) {
      handleNavigation();
      deleteCollection(collectionId);
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
              Are you sure you want to delete this collection? All of your
              categories and bookmarks within this collection will be removed
              permanently from our servers forever. This action cannot be
              undone.
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
      title="Delete collection"
    />
  );
});

export default DeleteCollectionModal;
