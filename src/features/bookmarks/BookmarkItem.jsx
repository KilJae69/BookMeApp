import {
  HiArrowCircleRight,
  HiPencil,
  HiTrash,
  HiEye,
  HiEyeOff,
  HiOutlineStar,
  HiStar
} from "react-icons/hi";
import IconButton from "../../ui/IconButton";
import { useState } from "react";
import useDeleteBookmarkModal from "../../store/useDeleteBookmarkModalStore";
import useUpdateBookmarkModalStore from "../../store/useUpdateBookmarkModalStore";

function BookmarkItem({ bookmark, categoryTheme }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);
  const deleteBookmarkModal = useDeleteBookmarkModal();
  const defaultFavicon = "/favicon-standard.png";
 
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
    setIsFavourite((prev) => !prev);
  }

  const handleToggleDeleteBookmarkModal = () => {
   
    deleteBookmarkModal.onOpen(bookmark.id);
  }

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-1 mb-3 flex flex-col "
      key={bookmark.id}
    >
      <div className="flex items-center">
        <img
          src={bookmark.favicon || defaultFavicon}
          alt="Favicon"
          className="w-6 h-6 mr-2"
          onError={(e) => e.target.src = defaultFavicon}
        />
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-grow truncate hover:underline ${categoryTheme?.textLightHover}`}
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
                className={`${categoryTheme?.textLight} ${categoryTheme?.textLightHover}`}
                Icon={HiArrowCircleRight}
                ariaLabel="Move"
              />
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
        <p className="py-2 text-sm italic text-gray-400">
          {bookmark.description}
        </p>
      )}
    </li>
  );
}

export default BookmarkItem;
