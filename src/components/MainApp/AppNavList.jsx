import { memo } from "react";
import AddCollection from "../../features/collections/AddCollection";
import CollectionsList from "../../features/collections/CollectionsList";


const AppNavList = memo(function AppNavList() {
  return (
    <>
      <nav className="flex flex-1 flex-col relative">
            <span className="font-bold text-lg mb-4 dark:text-white">Your Collections</span>
        <div className="sticky top-0 z-10 py-2"><AddCollection  /></div>
        <ul role="list" className="flex flex-1 flex-col gap-y-7 mb-10">
          <li>
            <CollectionsList />
          </li>
        </ul>
      </nav>
    </>
  );
})

export default AppNavList;
