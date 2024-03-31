import {
  HiPencil,
  HiTrash,
  HiEye,
  HiEyeOff,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import IconButton from "../../components/buttons/IconButton";
import { useState } from "react";
import useDeleteBookmarkModal from "../../store/useDeleteBookmarkModalStore";
import useUpdateBookmarkModalStore from "../../store/useUpdateBookmarkModalStore";
import { applyCategoryTheme } from "../../helpers/applyCategoryTheme";
import { useUpdateBookmarkFavoriteStatus } from "../favourites/useUpdateBookmarkFavoriteStatus";

function BookmarkItem({ bookmark, categoryColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);
  const deleteBookmarkModal = useDeleteBookmarkModal();
  const defaultFavicon = "/globe-grid.svg";
  const categoryId = bookmark.category_id;
  const categoryTheme = applyCategoryTheme(categoryColor);
  const { updateBookmarkFavoriteStatus, isUpdating } =
  useUpdateBookmarkFavoriteStatus();
  const [isFavourite, setIsFavourite] = useState(bookmark.is_favorite);

  const updateBookmarkModal = useUpdateBookmarkModalStore();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleDescription = () => {
    setToggleDescription((prev) => !prev);
  };

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
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-1 flex flex-col "
      key={bookmark.id}
    >
      <div className="flex items-center">
        <img
          src={bookmark.favicon || defaultFavicon}
          alt="Favicon"
          className="w-6 h-6 mr-2"
          onError={(e) => (e.target.src = defaultFavicon)}
        />
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-grow truncate dark:text-textPrimaryDark hover:underline focus:ring-1 focus:outline-none focus:ring-lightOutline dark:focus:ring-darkOutline ${categoryTheme?.textLightHover}`}
        >
          {bookmark.title}
        </a>

        <div className="flex min-h-7 ml-3">
          {isHovered && bookmark.description && (
            <IconButton
              className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
              Icon={toggleDescription ? HiEye : HiEyeOff}
              ariaLabel="Toggle description"
              onClick={handleToggleDescription}
            />
          )}
          {isHovered && (
            <>
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
        </div>
      </div>
      {toggleDescription && (
        <p className="py-2 text-sm italic text-textPrimary400">
          {bookmark.description}
        </p>
      )}
    </li>
  );
}

export default BookmarkItem;
