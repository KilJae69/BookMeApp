
import ToggleMobileAppNav from "./ToggleMobileAppNav";
import UserProfile from "./UserProfile";
import FavouritesLink from "../../features/favourites/FavouritesLink";

function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-white bg-bgPrimary50 dark:bg-bgDarkPrimary px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <ToggleMobileAppNav />
      
      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
      <FavouritesLink/>
      <div className="flex w-full items-center justify-end gap-x-4 lg:gap-x-6">
        {/* Profile dropdown */}
        <UserProfile />
      </div>
    </header>
  );
}

export default AppHeader;
