
import { useNavigate, useParams } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import EditActionsDropdown from "../../ui/EditActionsDropdown";
import useDeleteCollectionModal from "../../store/useDeleteCollectionModal";
import useUpdateCollectionModalStore from "../../store/useUpdateCollectionModalStore";
import { useCallback } from "react";


function CollectionItem({ collection }) {
  const { id: collectionId, collection_name: collectionName } = collection;
 
  const deleteCollectionModal = useDeleteCollectionModal();
  const updateCollectionModal = useUpdateCollectionModalStore();

  const { collectionId: currentCollectionId } = useParams();
  const isSelected = Number(currentCollectionId) === Number(collectionId);
  const itemClasses = classNames(
    "cursor-pointer flex items-center justify-between",
    isSelected
      ? "bg-gray-50 text-rose-600"
      : "text-gray-700 hover:text-rose-600 hover:bg-gray-50"
  );
  const navigate = useNavigate();

  const handleEdit = useCallback(
    (e) => {
      e.stopPropagation();
      updateCollectionModal.onOpen(collectionId, collectionName);
    },
    [collectionId, collectionName, updateCollectionModal]
  );

  const handleDelete = useCallback((e)=>{
    e.stopPropagation();
    deleteCollectionModal.onOpen(collectionId);
  },[collectionId, deleteCollectionModal])


  const handleNavigate = useCallback(
    (currentCollectionId) => {
      const targetCollectionId = Number(collectionId);
      if (Number(currentCollectionId) === targetCollectionId) return;

      navigate(`/dashboard/${targetCollectionId}`);
    },
    [navigate, collectionId]
  );

  return (
    <li
      onClick={() => handleNavigate(currentCollectionId)}
      role="listitem"
      className={itemClasses}
      >
      <span className="flex gap-x-3 p-2 text-sm leading-6 font-semibold">
        {collectionName}
      </span>
      <EditActionsDropdown
      onEdit={handleEdit}
       onDelete={handleDelete} />
    </li>   
  );
}

export default CollectionItem;
