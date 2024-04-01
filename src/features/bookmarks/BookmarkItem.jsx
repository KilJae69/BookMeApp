
import { useState } from "react";
import { applyCategoryTheme } from "../../helpers/applyCategoryTheme";
import { isMobile } from "react-device-detect";
import BookmarkEditActions from "./BookmarkEditActions";

function BookmarkItem({ bookmark, categoryColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);

  const defaultFavicon = "/globe-grid.svg";

  const categoryTheme = applyCategoryTheme(categoryColor);


  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => setIsHovered(false);
  
 

  const handleToggleDescription = () => {
    setToggleDescription((prev) => !prev);
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
         {isHovered && !isMobile && <BookmarkEditActions bookmark={bookmark} categoryTheme={categoryTheme} toggleDescription={toggleDescription} onToggleDescription={handleToggleDescription}/>}
         {isMobile && <BookmarkEditActions bookmark={bookmark} categoryTheme={categoryTheme} toggleDescription={toggleDescription} onToggleDescription={handleToggleDescription}/>}
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
