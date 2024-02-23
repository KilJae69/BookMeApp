import Heading from "../ui/Heading";
import CategoriesList from "../features/categories/CategoriesList";
import AddCategory from "../features/categories/AddCategory";
import { useParams } from "react-router-dom";
import { useCollectionById } from "../features/collections/useCollectionById";
import Spinner from "../ui/Spinner";
import EmptyCollection from "../ui/EmptyCollection";

export default function Main() {
  const { collectionId } = useParams();
  const validCollectionId =
    Number(collectionId) && !isNaN(Number(collectionId))
      ? Number(collectionId)
      : null;

  const { isLoading, collection, error } = useCollectionById(validCollectionId);

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center py-20">
        <Spinner size="huge" />
      </div>
    );
  if (!collection) return <div>Collection not found</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {collection.categories.length > 0 && (
        <>
          <Heading className="text-slate-300 text-center text-3xl" level={2}>
            Categories:
          </Heading>
          <AddCategory />
          <CategoriesList categories={collection.categories} />
        </>
      )}
      {collection.categories.length === 0 && <EmptyCollection />}
    </div>
  );
}
