import Spinner from "../../ui/Spinner";
import CollectionItem from "./CollectionItem";
import { useCollections } from "./useCollections";

function CollectionsList() {
  const { collections, isLoading } = useCollections();

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {isLoading && (
        <div className=" flex justify-center">
          <Spinner size="large"/>
        </div>
      )}
      {!isLoading &&
        collections &&
        collections.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        ))}
    </ul>
  );
}

export default CollectionsList;
