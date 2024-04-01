import { useParams } from "react-router-dom";

import useSearchStore from "../store/useSearchStore";
import { useValidateCollection } from "../hooks/useValidateCollection";

import EmptyCollection from "../components/EmptyCollection";
import Heading from "../components/Heading";
import CategoriesList from "../features/categories/CategoriesList";

import { useCategoriesByCollectionId } from "../features/categories/useCategoriesForCollectionId";
import DeleteCategoryModal from "../features/categories/DeleteCategoryModal";
import UpdateCategoryModal from "../features/categories/UpdateCategoryModal";
import AddBookmarkModal from "../features/bookmarks/AddBookmarkModal";
import SearchResults from "../features/search/SearchResults";
import CategoriesSkeletonLoader from "../components/skeletons/CategoriesSkeletonLoader";

import AddCategoryModal from "../features/categories/addCategoryModal";
import SearchResultsSkeleton from "../components/skeletons/SearchResultsSkeleton";
import CollectionNotFound from "../components/CollectionNotFound";
import MainHeader from "../components/MainApp/MainHeader";
import EmptySearch from "../features/search/EmptySearch";

export default function Main() {
  const isValidCollection = useValidateCollection();
  const { collectionId } = useParams();

  const validCollectionId = Number(collectionId);

  const {
    isLoading: isLoadingCategories,
    categories,
    error: errorCategories,
  } = useCategoriesByCollectionId(validCollectionId);

  const {
    isLoading: isSearching,
    searchedBookmarks,
    searchTerm,
  } = useSearchStore();

  return (
    <>
      {isValidCollection && <MainHeader />}
      {isSearching && <SearchResultsSkeleton />}

      {!isSearching && searchedBookmarks?.length > 0 && (
        <SearchResults searchResults={searchedBookmarks} />
      )}

      {!isSearching && searchedBookmarks?.length === 0 && searchTerm && (
        <EmptySearch />
      )}

      {isLoadingCategories && <CategoriesSkeletonLoader />}

      {!isValidCollection && !isLoadingCategories && <CollectionNotFound />}

      {errorCategories && <div>Error: {errorCategories.message}</div>}

      {categories &&
        categories.length === 0 &&
        !isSearching &&
        isValidCollection &&
        !searchTerm && <EmptyCollection />}

      {isValidCollection &&
        categories &&
        categories.length > 0 &&
        !isSearching &&
        !searchTerm && (
          <div className="p-5">
            <Heading
              className="text-primary600 dark:text-white text-center text-3xl"
              level={1}
            >
              Categories:
            </Heading>
            <CategoriesList categories={categories} />
          </div>
        )}

      <DeleteCategoryModal />
      <UpdateCategoryModal />
      <AddCategoryModal />
      <AddBookmarkModal />
      
    </>
  );
}
