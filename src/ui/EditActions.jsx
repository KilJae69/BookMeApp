import { HiDotsHorizontal, HiPencil, HiTrash } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import IconButton from "./IconButton";


function EditActions({
  onDelete,
  onEditMode,
  onEdit,
  isEditMode,
  isEditing
}) {


  return (
    <div className="flex gap-2">
      {isEditMode && !isEditing && (
        <>
          <IconButton
            Icon={HiTrash}
            onClick={onDelete}
            ariaLabel="Delete"
          />
          <IconButton Icon={HiPencil} onClick={onEdit} ariaLabel="Edit" />
        </>
      )}

      <IconButton
        Icon={!isEditMode ? HiDotsHorizontal : HiXMark}
        onClick={onEditMode}
        ariaLabel={!isEditMode ? "Open options" : "Close options"}
      />
    </div>
  );
}

export default EditActions;
