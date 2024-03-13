import SearchBookmarks from "../../features/bookmarks/SearchBookmarks";
import ProfileMenu from "./ProfileMenu";
import ToggleDarkMode from "../buttons/ToggleDarkMode";
import ToggleMobileAppNav from "./ToggleMobileAppNav";

function AppHeader({ setIsOpen }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <ToggleMobileAppNav setIsOpen={setIsOpen} />

      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <SearchBookmarks />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <ToggleDarkMode />

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            aria-hidden="true"
          />

          {/* Profile dropdown */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
