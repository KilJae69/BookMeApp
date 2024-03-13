import { memo } from "react";
import AddCollection from "../../features/collections/AddCollection";
import CollectionsList from "../../features/collections/CollectionsList";
import Heading from "../../ui/Heading";


const AppNavList = memo(function AppNavList() {
  return (
    <>
      <nav className="flex flex-1 flex-col">
            <Heading>Your Collections</Heading>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
          </li>
          <li>
            <CollectionsList />
          </li>
        </ul>
        <AddCollection />
      </nav>
    </>
  );
})

export default AppNavList;
