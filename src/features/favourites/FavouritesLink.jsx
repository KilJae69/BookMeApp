import { HiStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

function FavouritesLink() {
  return (
    <Link
      to="/favourites"
      className="flex gap-2 p-2 focus:ring focus:outline-none focus:ring-lightOutline dark:focus:ring-darkOutline"
    >
      <HiStar className="w-6 h-6 text-primary600 dark:text-primaryDark600" />
      <span className="hidden text-textPrimary900 dark:text-white sm:block font-bold text-nowrap">
        Favourite bookmarks
      </span>
    </Link>
  );
}

export default FavouritesLink;
