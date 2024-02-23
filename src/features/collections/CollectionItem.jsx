import { useState, useRef, useEffect, useReducer, useCallback } from "react";
import { classNames } from "../../helpers/classNames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useRenameCollection } from "./useRenameCollection";
import Spinner from "../../ui/Spinner";
import EditActions from "../../ui/EditActions";
import RenameForm from "../../ui/RenameForm";
import { useDeleteCollection } from "./useDeleteCollection";
import { useNavigate, useParams } from "react-router-dom";

import ConfirmDelete from "../../ui/ConfirmDelete";
import { editStateReducer, initialState } from "../../hooks/editStateReducer";

import DialogModal from "../../ui/DialogModal";
import { useModalState } from "../../hooks/useModalState";

function CollectionItem({ collection }) {
  const { id: collectionId, collection_name: name } = collection;
  const [state, dispatch] = useReducer(editStateReducer, initialState);
  const { isEditMode, isEditing } = state;
  const [newName, setNewName] = useState(name);
  const itemRef = useRef(null);
  const inputRef = useRef(null);

  const { isRenaming: isLoadingRenaming, renameCollection } =
    useRenameCollection();
  const { isDeleting: isLoadingDeleting, deleteCollection } =
    useDeleteCollection();
  const { collectionId: currentCollectionId } = useParams();
  const isSelected = Number(currentCollectionId) === Number(collectionId);
  const itemClasses = classNames(
    "cursor-pointer flex items-center justify-between",
    isSelected
      ? "bg-gray-50 text-rose-600"
      : "text-gray-700 hover:text-rose-600 hover:bg-gray-50"
  );
  const navigate = useNavigate();
  const { isOpen, toggleModal, openModal, closeModal } = useModalState();

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  //Dispatchers
  const handleToggleEditMode = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch({ type: "toggleEditMode" });
      if (isEditing) dispatch({ type: "toggleEditing" });
    },
    [isEditing]
  );

  const handleToggleRenaming = useCallback((e) => {
    e.stopPropagation();
    dispatch({ type: "toggleEditing" });
  }, []);

  function handleDeleteCollection() {
    deleteCollection(collection.id);
    closeModal();
    navigate("/dashboard");
  }

  function handleNavigate(currentCollectionId) {
    // Convert both IDs to strings to ensure a fair comparison
    const targetCollectionId = Number(collectionId);
    const currentCollectionIdStr = Number(currentCollectionId);

    if (currentCollectionIdStr === targetCollectionId) return;

    navigate(`/dashboard/${targetCollectionId}`);
  }

  function handleRenaming(e) {
    e.preventDefault();
    if (newName === name) return dispatch({ type: "toggleEditing" });
    renameCollection({ collectionId: collection.id, newName: newName });
    dispatch({ type: "reset" });
  }

  function handleRenameChange(e) {
    setNewName(e.target.value);
  }

  useOutsideClick(itemRef, () => {
    if (!isEditMode) return;
    dispatch({ type: "reset" });
  });

  if (isLoadingRenaming || isLoadingDeleting)
    return (
      <div className="flex items-center justify-center h-12">
        <Spinner />
      </div>
    );

  return (
    <li
      onClick={() => handleNavigate(currentCollectionId)}
      role="listitem"
      ref={itemRef}
      className={itemClasses}
    >
      <span className="flex gap-x-3 p-2 text-sm leading-6 font-semibold">
        {!isEditing ? (
          `${name}`
        ) : (
          <RenameForm
            ref={inputRef}
            value={newName}
            onChange={handleRenameChange}
            onSubmit={handleRenaming}
          />
        )}
      </span>
      <EditActions
        isEditMode={isEditMode}
        onEditMode={handleToggleEditMode}
        onEdit={handleToggleRenaming}
        isEditing={isEditing}
        onDelete={openModal}
      />
      <DialogModal isOpen={isOpen} setIsOpen={toggleModal}>
        <ConfirmDelete
        toDelete="Collection"
          onDelete={handleDeleteCollection}
          onCancel={closeModal}
          name={name}
        />
      </DialogModal>
    </li>
  );
}

export default CollectionItem;
