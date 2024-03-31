export function addBookmarksToCategory(collection, categoryName, bookmarks) {
  let category = collection.categories.find(
    (c) => c.categoryName === categoryName
  );
  if (!category) {
    category = { categoryName, bookmarks: [] };
    collection.categories.push(category);
  }

  bookmarks.forEach((bookmark) => {
    const title = bookmark.textContent.trim();
    const url = bookmark.href;

    if (!category.bookmarks.some((b) => b.url === url)) {
      category.bookmarks.push({ title, url });
    }
  });
}
