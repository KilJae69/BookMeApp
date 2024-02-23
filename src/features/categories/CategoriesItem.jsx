import { useReducer, useRef } from "react";

import EditActions from "../../ui/EditActions";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useModalState } from "../../hooks/useModalState";

import DialogModal from "../../ui/DialogModal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import AddCategoryForm from "./AddCategoryForm";
import { editStateReducer, initialState } from "../../hooks/editStateReducer";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function CategoriesItem({ category, theme }) {
  const { category_name: name } = category;
  const { isOpen, closeModal, toggleModal } = useModalState();
  const [state, dispatch] = useReducer(editStateReducer, initialState);
  const { isEditMode, isDeleting, isEditing } = state;
  const itemRef = useRef(null);

  useOutsideClick(itemRef, () => isEditMode && dispatch({ type: "reset" }));

  function toggleDeleting(e) {
    e.stopPropagation();
    dispatch({ type: "toggleDeleting" });
    toggleModal();
  }

  function toggleEditing(e) {
    e.stopPropagation();
    dispatch({ type: "toggleEditing" });
    toggleModal();
  }

  return (
    <div
      ref={itemRef}
      className="w-full col-span-1 flex rounded-md shadow-sm transition-transform duration-300 transform cursor-pointer"
    >
      <div
        className={`relative flex flex-1 items-center justify-between truncate rounded-r-md  border-l-4 ${theme.border}`}
      >
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <span className=" font-medium text-gray-900">{name}</span>
          <p className="text-gray-500"># Bookmarks</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <EditActions
            onEdit={toggleEditing}
            isEditMode={isEditMode}
            onEditMode={(e) => {
              e.stopPropagation();
              dispatch({ type: "toggleEditMode" });
            }}
            onDelete={toggleDeleting}
          />
        </div>
        {/* <div className={`absolute bottom-0 left-0 h-1 ${theme.borderBottom} w-0 hover:w-full transition-all duration-300 ease-out`}></div> */}
      </div>

      
    </div>
  );
}

export default CategoriesItem;
