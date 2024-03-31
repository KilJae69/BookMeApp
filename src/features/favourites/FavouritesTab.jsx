import { Tab } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "../../helpers/classNames";
import { useFavoriteBookmarks } from "./useFavoriteBookmarks";
import useAuthStore from "../../store/useAuthStore";
import BookmarkItem from "../bookmarks/BookmarkItem";
import EmptyFavourites from "./EmptyFavourites";
import Spinner from "../../components/Spinner";

const tabs = [
  { key: "3", label: "Last 3 Days", days: 3 },
  { key: "7", label: "Last 7 Days", days: 7 },
  { key: "30", label: "Last 30 Days", days: 30 },
  { key: "all", label: "All Favourites", days: null }, 
];

export default function FavouritesTab() {
  const { user } = useAuthStore();
  const [selectedDays, setSelectedDays] = useState(tabs[0].days);

 
  const { isLoading, favoriteBookmarks, error } = useFavoriteBookmarks(
    user.id,
    selectedDays
  );

  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0">
      <Tab.Group onChange={(index) => setSelectedDays(tabs[index].days)}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2",
                  selected
                    ? "bg-secondaryBg dark:bg-secondaryBgDark text-primary600 dark:text-primaryDark600 shadow"
                    : "text-blue-100 dark:bg-secondaryBgDark/[0.12] hover:text-white"
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab) => (
            <Tab.Panel
              key={tab.key}
              className={classNames(
                "rounded-xl shadow-md border bg-secondaryBg dark:bg-secondaryBgDark p-3",
                "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2"
              )}
            >
              {isLoading ? (
                <div className="p-4 flex items-center justify-center"><Spinner size="huge"/></div>
              ) : (
                favoriteBookmarks.map((bookmark) => (
                  <BookmarkItem key={bookmark.id} categoryColor={bookmark.categories.color} bookmark={bookmark}/>
                ))
              )}
              {error && <p>Error loading data</p>}
              {favoriteBookmarks?.length === 0 && !isLoading && !error && <EmptyFavourites />}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
