import { FaFolderClosed, FaFolderOpen } from "react-icons/fa6";

import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import EditActionsDropdown from "../../components/EditActionsDropdown";
import useDeleteCollectionModal from "../../store/useDeleteCollectionModal";
import useUpdateCollectionModalStore from "../../store/useUpdateCollectionModalStore";
import useSearchStore from "../../store/useSearchStore";
import { useSidebarStore } from "../../store/useSidebarStore";

function CollectionItem({ collection }) {
  const { id: collectionId, collection_name: collectionName } = collection;

  const deleteCollectionModal = useDeleteCollectionModal();
  const updateCollectionModal = useUpdateCollectionModalStore();

  const { collectionId: collectionIdParam } = useParams();
  const currentCollectionId = collectionIdParam;
  const { closeSidebar } = useSidebarStore();

  const isSelected = Number(currentCollectionId) === Number(collectionId);
  const itemClasses = classNames(
    "cursor-pointer flex items-center justify-between focus:outline-none focus:border focus:rounded-md focus:border-lightOutline dark:focus:border-darkOutline",
    isSelected
      ? "bg-bgPrimary50 dark:bg-bgDarkPrimary text-primary600 dark:text-indigo-600"
      : "text-textPrimary700 dark:text-textPrimaryDark hover:text-primary600 dark:hover:text-white hover:bg-bgPrimary50 dark:hover:bg-bgDarkPrimary"
  );
  const navigate = useNavigate();
  const resetSearch = useSearchStore((state) => state.resetSearch);

  const handleEdit = useCallback(
    (e) => {
      e.stopPropagation();
      updateCollectionModal.onOpen(collectionId, collectionName);
    },
    [collectionId, collectionName, updateCollectionModal]
  );

  const handleDelete = useCallback(
    (e) => {
      e.stopPropagation();
      deleteCollectionModal.onOpen(collectionId);
    },
    [collectionId, deleteCollectionModal]
  );

  const handleNavigate = useCallback(
    (currentCollectionId) => {
      resetSearch();
      const targetCollectionId = Number(collectionId);
      if (Number(currentCollectionId) === targetCollectionId) return;

      closeSidebar();
      navigate(`/${collectionId}?name=${encodeURIComponent(collectionName)}`);
    },
    [navigate, collectionId, resetSearch, collectionName, closeSidebar]
  );

  return (
    <div
      onClick={() => handleNavigate(currentCollectionId)}
      role="listitem"
      className={itemClasses}
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && handleNavigate(currentCollectionId)
      }
    >
      <div className=" flex gap-x-3 p-2 text-sm leading-6 font-semibold max-w-[80%]">
        {isSelected ? (
          <FaFolderOpen className="inline-block flex-shrink-0 text-lg group-hover:text-primary600 dark:group-hover:text-primaryDark600" />
        ) : (
          <FaFolderClosed className="inline-block flex-shrink-0 text-lg group-hover:text-primary600 dark:group-hover:text-primaryDark600" />
        )}
        <span className="truncate flex-grow">{collectionName}</span>
      </div>
      <div className="flex-shrink-0 ml-2">
        <EditActionsDropdown onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default CollectionItem;
