import Heading from "../ui/Heading";
import CategoriesList from "../features/categories/CategoriesList";
import AddCategory from "../features/categories/AddCategory";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import EmptyCollection from "../ui/EmptyCollection";

import DeleteCollectionModal from "../features/collections/DeleteCollectionModal";
import UpdateCollectionModal from "../features/collections/UpdateCollectionModal";
import { useCategoriesByCollectionId } from "../features/categories/useCategoriesForCollectionId";
import DeleteCategoryModal from "../features/categories/DeleteCategoryModal";
import AddCategoryModal from "../features/categories/addCategoryModal";
import UpdateCategoryModal from "../features/categories/UpdateCategoryModal";
import AddBookmarkModal from "../features/bookmarks/AddBookmarkModal";
import DeleteBookmarkModal from "../features/bookmarks/DeleteBookmarkModal";
import UpdateBookmarkModal from "../features/bookmarks/UpdateBookmarkModal";

export default function Main() {
  const { collectionId } = useParams();
  const validCollectionId =
    Number(collectionId) && !isNaN(Number(collectionId))
      ? Number(collectionId)
      : null;

  const {isLoading:isLoadingCategories, categories, error:errorCategories} = useCategoriesByCollectionId(validCollectionId);

  if (isLoadingCategories)
    return (
      <div className="w-full flex items-center justify-center py-20">
        <Spinner size="huge" />
      </div>
    );
  if (!categories) return <div>Collection not found</div>;

  if (errorCategories) return <div>Error: {errorCategories.message}</div>;

  return (
    <div>
      {categories.length > 0 && (
        <>
          <Heading className="text-slate-300 text-center text-3xl" level={2}>
            Categories:
          </Heading>
          <AddCategory />
          <CategoriesList categories={categories} />
        </>
      )}
      {categories.length === 0 && <EmptyCollection />}
      <DeleteCollectionModal />
      <UpdateCollectionModal />
      <DeleteCategoryModal />
      <AddCategoryModal />
      <UpdateCategoryModal />
      <AddBookmarkModal />
      <DeleteBookmarkModal />
      <UpdateBookmarkModal />
    </div>
  );
}
