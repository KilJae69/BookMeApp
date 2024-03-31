import BookmarkItem from "./BookmarkItem";
import BookmarkItemSkeleton from "../../components/skeletons/BookmarkItemSkeleton";
import { useBookmarksByCategoryId } from "./useBookmarksByCategoryId";
import Button from "../../components/buttons/Button";
import useAddBookmarkModalStore from "../../store/useAddBookmarkModalStore";

function BookmarksList({ categoryColor, categoryId }) {
  const { bookmarks, error, isLoading } = useBookmarksByCategoryId(categoryId);
  const addBookmarkModal = useAddBookmarkModalStore();

  if (isLoading)
    return (
      <ul>
        <BookmarkItemSkeleton count={3} />
      </ul>
    );

  if (error) return (
    <div className="dark:text-textPrimaryDark">Error loading bookmarks</div>
  );

  if (!bookmarks || bookmarks.length === 0)
    return (
      <>
        <p className="dark:text-textPrimaryDark">No bookmarks in this category</p>
        <div className="py-3 ">
          <Button
            onClick={() => addBookmarkModal.onOpen(categoryId)}
            variation="form"
          >
            Add bookmark
          </Button>
        </div>
      </>
    );

  return (
    <>
      <ul>
        {bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            bookmark={bookmark}
            categoryColor={categoryColor}
          />
        ))}
      </ul>
      <div className="py-3 ">
        <Button
          onClick={() => addBookmarkModal.onOpen(categoryId)}
          variation="form"
        >
          Add bookmark
        </Button>
      </div>
    </>
  );
}

export default BookmarksList;
