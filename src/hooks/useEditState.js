import { useCallback, useState } from "react";

export function useEditState(initialState = false) {
  const [isEditMode, setIsEditMode] = useState(initialState);
  const [isRenaming, setIsRenaming] = useState(initialState);
  const [isEditing, setIsEditing] = useState(initialState);
  const [isDeleting, setIsDeleting] = useState(initialState);

  const toggleEditMode = useCallback(
    (e) => {
      e.stopPropagation();
      setIsEditMode((show) => !show);
      if (isRenaming) setIsRenaming(false);
    },
    [isRenaming]
  );

  const toggleRename = useCallback((e) => {
    e.stopPropagation();
    setIsRenaming((show) => !show);
  }, []);

  const toggleEdit = useCallback((e) => {
    e.stopPropagation();
    setIsEditing((show) => !show);
  }, []);

  return {
    isEditMode,
    setIsEditMode,
    toggleEdit,
    isRenaming,
    toggleEditMode,
    toggleRename,
    setIsRenaming,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting,
  };
}
