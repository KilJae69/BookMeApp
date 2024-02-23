import { useCallback, useState } from "react";
import AddCollectionForm from "../features/collections/AddCollectionForm";
import CollectionsList from "../features/collections/CollectionsList";
import Heading from "./Heading";
import Button from "./Button";

function AppNavList() {
  const [isAddingCollection, setIsAddingCollection] = useState(false);

  const toggleAddingCollection = useCallback(() => {
    setIsAddingCollection((prev) => !prev);
  }, []);

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <Heading>Your Collections</Heading>
        </li>
        <li>
            <CollectionsList />  
        </li>
        <li>
          {isAddingCollection && (
            <AddCollectionForm onCancelAdding={toggleAddingCollection} />
          )}
        </li>
        <li className="text-center">
          {!isAddingCollection && (
            <Button
              variation="primary"
              disabled={isAddingCollection}
              onClick={toggleAddingCollection}
            >
              Add Collection
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppNavList;
