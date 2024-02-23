const initialState = {
  isEditMode: false,
  isRenaming: false,
  isDeleting: false,
  isEditing: false,
};

function editStateReducer(state, action) {
  switch (action.type) {
    case "toggleEditMode":
      return { ...state, isEditMode: !state.isEditMode };
    case "toggleRenaming":
      return { ...state, isRenaming: !state.isRenaming };
    case "toggleDeleting":
      return { ...state, isDeleting: !state.isDeleting };
    
    case "toggleEditing":
      return { ...state, isEditing: !state.isEditing };
    
    case "reset":
      return {initialState};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export { editStateReducer, initialState };
