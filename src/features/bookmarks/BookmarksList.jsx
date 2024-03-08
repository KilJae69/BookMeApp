
import BookmarkItem from "./BookmarkItem";


function BookmarksList({  categoryTheme,bookmarks }) {

  return (
    <ul>
      {bookmarks?.map((bookmark) => (
          <BookmarkItem
            categoryTheme={categoryTheme}
            key={bookmark.id}
            bookmark={bookmark}
      
          />
        ))}
    </ul>
  );
}

export default BookmarksList;
