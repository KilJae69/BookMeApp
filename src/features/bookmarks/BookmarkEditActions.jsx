import { useRef, useState } from "react";
import {

  HiPencil,
  HiTrash,
  HiStar,
  HiOutlineStar,
  HiEye,
  HiEyeOff,
  HiDotsHorizontal,
} from "react-icons/hi";

import IconButton from "../../components/buttons/IconButton";
import useUpdateBookmarkModalStore from "../../store/useUpdateBookmarkModalStore";

import useDeleteBookmarkModal from "../../store/useDeleteBookmarkModalStore";
import { useUpdateBookmarkFavoriteStatus } from "../favourites/useUpdateBookmarkFavoriteStatus";

import { isMobile } from "react-device-detect";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const BookmarkEditActions = ({
  bookmark,
  categoryTheme,
  toggleDescription,
  onToggleDescription,
}) => {
  const [showActions, setShowActions] = useState(false);
  const actionsRef = useRef(null);
  const [isFavourite, setIsFavourite] = useState(bookmark.is_favorite);
  const updateBookmarkModal = useUpdateBookmarkModalStore();
  const deleteBookmarkModal = useDeleteBookmarkModal();
  const categoryId = bookmark.category_id;
  const { updateBookmarkFavoriteStatus, isUpdating } =
    useUpdateBookmarkFavoriteStatus();

     useOutsideClick(actionsRef, () => setShowActions(false));

  const handleToggleActionsVisibility = () => setShowActions((prev) => !prev);

  const handleToggleFavourite = () => {
    const newIsFavourite = !isFavourite;
    setIsFavourite(newIsFavourite);

    updateBookmarkFavoriteStatus({
      bookmarkId: bookmark.id,
      isFavorite: newIsFavourite,
    });
  };

  const handleToggleDeleteBookmarkModal = () => {
    deleteBookmarkModal.onOpen(bookmark.id, categoryId);
  };

  return (
    <div ref={actionsRef} className="flex">
      {(!isMobile || showActions) && (
        <>
          {bookmark.description && (
            <IconButton
              className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
              Icon={toggleDescription ? HiEye : HiEyeOff}
              ariaLabel="Toggle description"
              onClick={onToggleDescription}
            />
          )}
          <IconButton
            onClick={() => updateBookmarkModal.onOpen(bookmark)}
            className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
            Icon={HiPencil}
            ariaLabel="Edit"
          />
          <IconButton
            onClick={handleToggleDeleteBookmarkModal}
            className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
            Icon={HiTrash}
            ariaLabel="Delete"
          />
          <IconButton
            disabled={isUpdating}
            className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
            Icon={isFavourite ? HiStar : HiOutlineStar}
            ariaLabel="Favourite"
            onClick={handleToggleFavourite}
          />
        </>
      )}
      {isMobile && (
        <IconButton
          className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
          Icon={HiDotsHorizontal}
          ariaLabel="Show actions"
          onClick={handleToggleActionsVisibility}
        />
      )}
    </div>
  );
};

export default BookmarkEditActions;
