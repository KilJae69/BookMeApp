import CollectionsSkeletonLoader from "../../components/skeletons/CollectionsSkeletonLoader";
import useAuthStore from "../../store/useAuthStore";
import CollectionItem from "./CollectionItem";
import { useCollections } from "./useCollections";


function CollectionsList() {
  const { user } = useAuthStore();
  const userId = user?.id;
  const { collections, isLoading } = useCollections(userId);

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {isLoading && <CollectionsSkeletonLoader/>}
      {!isLoading &&
        collections &&
        collections.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        ))}
      
    </ul>
  );
}

export default CollectionsList;
