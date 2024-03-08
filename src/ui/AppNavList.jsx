import CollectionsList from "../features/collections/CollectionsList";
import Heading from "./Heading";
import Button from "./Button";
import AddCollectionModal from "../features/collections/AddCollectionModal";
import useAddCollectionModalStore from "../store/useAddCollectionModalStore";

function AppNavList() {
  const addCollectionModal = useAddCollectionModalStore();
  return (
    <>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <Heading>Your Collections</Heading>
          </li>
          <li>
            <CollectionsList />
          </li>

          <li className="text-center">
            <Button onClick={addCollectionModal.onOpen} variation="primary">
              Add Collection
            </Button>
          </li>
        </ul>
      </nav>
      <AddCollectionModal />
    </>
  );
}

export default AppNavList;
