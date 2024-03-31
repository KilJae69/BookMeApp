import { useLocation } from "react-router-dom";
import SearchBookmarks from "../../features/search/SearchBookmarks";
import AddCategory from "../../features/categories/AddCategory";
import { memo } from "react";
import useSearchStore from "../../store/useSearchStore";

const MainHeader = memo(function MainHeader() {
  const resetSearch = useSearchStore((state) => state.resetSearch);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const collectionName = queryParams.get("name");
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-secondaryBg dark:bg-secondaryBgDark px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <span
        onClick={resetSearch}
        className="cursor-pointer font-semibold max-w-[50px] sm:max-w-[20%] truncate text-xs sm:text-lg text-primary600 hover:text-primary500 dark:text-textPrimaryDark dark:hover:text-white"
      >
        {collectionName}
      </span>
      <div className="h-6 w-px bg-gray-200" aria-hidden="true" />

      <SearchBookmarks />

      {/* Separator */}
      <div className="  h-6 w-px bg-gray-200" aria-hidden="true" />

      <AddCategory compact={true} />
    </header>
  );
});

export default MainHeader;
